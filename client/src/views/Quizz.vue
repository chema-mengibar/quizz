<script>

import DisplayTeams from '../components/display-teams.vue'

export default {
  name: "Quizz",
  inject: ["$services"],
  data: () => ({
    t: {},
    z: [],
    keys:[],
    answer_selected: undefined,
    answer_right: undefined
  }),
  methods: {
    setAnswerSeleted: function( letter ){
      this.answer_selected = letter;
      this.$services.toolService.flowQuestion = 3;
    },
    onKey: function(e){
     const k = e.key;

      if (['1', '2', '3', '4'].includes(k)) {
        this.$services.toolService.flowQuestion = Number(k);
      } 

      else if(k === 't') { 
        const {query} = this.$route;
        this.$router.push({ path: '/teams', query })
      }
      
      else if (this.$services.toolService.flowQuestion === 2  ) {

        if(!this.keys.includes(k) && this.$services.toolService.teamsKeys.includes(k)){
          this.keys.push(k)
        }
        
        if(this.$services.toolService.teamsKeys.includes(k)){
          console.log('[QUIZZ] team', this.$services.toolService.getTeamByKey(k), 'answered first')
          
        }
      }
      
      else if(this.$services.toolService.flowQuestion === 3) { 
        if(!this.keys.includes(k)){
          this.keys.push(k)
        }
      }
      

      
      if(this.$services.toolService.flowQuestion === 1) { 
        this.keys.splice(0,this.keys.length);
        this.answer_selected = undefined;
        this.answer_right = undefined;
      }

      

    },
    next: function(e){
      const {query} = this.$route;
      const queryResult = this.$services.toolService.nextQuizz(query);
      this.$router.push({query: queryResult})
    },
    resolve: function(){
      if(this.$services.toolService.flowQuestion === 3) { 
        this.answer_right = 'C';
        this.$services.toolService.flowQuestion = 4;

        if(true){
          const winnerKey = this.keys[0];
          this.$services.toolService.addPointsToTeamByKey(winnerKey);
        }



        //@todo: add/remove point to team
      }
    },
    isSelected( letter ) {
      return this.answer_selected === letter ? "selected" : ""
    },
    isRight( letter ) {
      return this.answer_right === letter ? "right" : ""
    }
  },
  created() {
    const _ = this;
    _.t = this.$services.localeService.D();
  },
  mounted() {
   document.addEventListener('keydown', this.onKey)
    // /quizz?round=0&current=1&done=2&done=3&wait=4
    const {query} = this.$route;
    const queryResult = this.$services.toolService.updateFromRouter(query);
  
  },
  unmounted(){
    document.removeEventListener('keydown', this.onKey)
  },
  components: {
    DisplayTeams
  },
};
</script>

<style  lang="scss">
@import "../styles/media";

.question-container {
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor:pointer;
}

.prepare {
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
}

.question-text {
  background: radial-gradient(
      38.67% 81.16% at 50% 50%,
      #2841aa 2.08%,
      #142a8c 43.23%,
      #031151 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border: 2px solid #dbddf8;
  border-radius: 21px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 90%;
  min-height: 50%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 55px;
  text-align: center;
  color: #ffffff;
}


.top-bar {
  width: 100%;
  height: 10%;
  background: rgba(2, 2, 92, 0.33);
  box-shadow: 0px 5px 11px rgba(32, 127, 212, 0.4);
  color: white; 
  font-size:24px;
  display: flex;
  gap: 20px;
  padding:20px;
}

.teams-container {
  margin-left: auto;

}

.answers-container {
  width: 100%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 30px;
  flex-basis: fit-content;
  justify-content: space-between;
}

.answer {
  background: radial-gradient(
    38.48% 50% at 50% 50%,
    #2841aa 2.08%,
    #142a8c 26.56%,
    #05155b 79.69%,
    #031151 100%
  );
  border: 2px solid #dbddf8;
  border-radius: 29px;
  display: flex;
  padding: 25px 20px;
  width: 45%;
  min-height: 15%;
  cursor: pointer;

  &:hover{
    outline: 4px solid #FFB800;
  }

  .answer-letter {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: -0.065em;
    margin-right: 10px;
    color: #ff9000;
  }

  .answer-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  &.selected{
    background: radial-gradient(38.48% 50% at 50% 50%, #FFB800 0%, #FF9000 100%);
    .answer-letter{
      color:white;
    }
    .answer-text{
      color:black;
    }
  }

  &.right{
    background: radial-gradient(38.48% 50% at 50% 50%, #3ED18B 0%, #039E62 100%);
  }


}
</style>

<template>
  <div class="layout-quizz">
    <div class="top-bar">
      <span>Quizz: {{$services.toolService.quizz}}</span> |
      <span>flow-question:{{$services.toolService.flowQuestion}}</span>
      <div class="teams-container">
       <DisplayTeams :keys="keys" />
      </div>
    </div>


    <div class="prepare" v-if="$services.toolService.flowQuestion === 1">
      Bereit?
    </div>

    <div class="question-container" 
      v-on:click="resolve()"
      v-if="$services.toolService.flowQuestion > 1">
      <div class="question-text">
        Haben die Rockmusiker nach dem Auftritt Lust auf Pasta, dann isst die
        ... ?
        
      </div>
    </div>
    <div class="answers-container" v-if="$services.toolService.flowQuestion > 1">
      
      <div class="answer" 
      :class="[isSelected('A'),  isRight('A')]"
        v-on:click="setAnswerSeleted('A')"
        data-answer-letter="A">
        <div class="answer-letter">A:</div>
        <div class="answer-text">Eier Spätzle lorem ipsum</div>
      </div>

      <div class="answer" 
      :class="[isSelected('B'), isRight('B')]"
        v-on:click="setAnswerSeleted('B')"
        data-answer-letter="B">
        <div class="answer-letter">B:</div>
        <div class="answer-text">Eier Spätzle</div>
      </div>

      <div class="answer" 
      :class="[isSelected('C'), isRight('C')]"
      v-on:click="setAnswerSeleted('C')"
      data-answer-letter="C">
        <div class="answer-letter">C:</div>
        <div class="answer-text">Eier Spätzle temporavit desidera</div>
      </div>

      <div class="answer" 
        :class="[isSelected('D'), isRight('D')]"
        v-on:click="setAnswerSeleted('D')"
        data-answer-letter="D">
        <div class="answer-letter">D:</div>
        <div class="answer-text">Eier Spätzle</div>
      </div>
    </div>
  </div>
</template>