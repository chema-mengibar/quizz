<script>
import { toRaw } from 'vue';
import DisplayTeams from './display-teams.vue'

export default {
  name: "QuizzX4",
  inject: ["$services"],
  props: {
    quizz: Object,
   
  },
  data: () => ({
    t: {},
    keys:[],
    answer_selected: undefined,
    answer_right: undefined,
  }),
  methods: {
    setAnswerSeleted: function( letter ){
      this.answer_selected = letter;
      this.$services.toolService.flowQuestion = 3;
    },
    onKey: function(e){
     const k = e.key;

      // if (['1', '2', '3', '4'].includes(k)) {
      //   this.$services.toolService.flowQuestion = Number(k);
      // } 

      if(k === 't') { 
        const {query} = this.$route;
        this.$router.push({ path: '/teams', query })
      }
      
      else if (this.$services.toolService.flowQuestion === 2  ) {

        if(!this.keys.includes(k) && this.$services.toolService.teamsKeys.includes(k)){
          this.keys.push(k)
        }
        
        // if(this.$services.toolService.teamsKeys.includes(k)){
        //   console.log('[QUIZZ] team', this.$services.toolService.getTeamByKey(k), 'answered first')
        // }
      }
      
      else if(this.$services.toolService.flowQuestion === 3) { 
        if(!this.keys.includes(k)){
          this.keys.push(k)
        }
      }
           
      if(this.$services.toolService.flowQuestion === 1) { 
        this.reset();
      }
     },
    showQuestion: function(){
      this.$services.toolService.flowQuestion = 2
    },
    resolve: function(){
      if(this.$services.toolService.flowQuestion === 3) { 
        const op = this.quizz.options.find( option => option.solution === true)
        this.answer_right = op.letter;
        this.$services.toolService.flowQuestion = 4;

        if(this.answer_right === this.answer_selected){
          const winnerKey = this.keys[0];
          this.$services.toolService.addPointsToTeamByKey(winnerKey);
        }else{
          //@todo: add/remove point to team
        }
      }
      else if(this.$services.toolService.flowQuestion === 4){
        this.$services.toolService.incrementProgrammCursor()
        this.reset();
      }
    },
    reset: function(){
      this.$services.toolService.flowQuestion = 1;
      this.answer_right = undefined;
      this.answer_selected = undefined;
      this.keys.splice(0,this.keys.length);
      this.answer_selected = undefined;
      this.answer_right = undefined;
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
   console.log(toRaw(this.quizz))
     
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
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor:pointer;
  height: 0;
  flex: 1;
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
  cursor:pointer;
}

.question {
   user-select: none;
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
  flex-direction: row;
  padding: 2%;
  width: 90%;
  min-height: 50%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 55px;
  text-align: center;
  color: #ffffff;
  height: 100%;
  gap: 30px;
}

.question-text{
  display:flex;
  align-items:center;
}

.question-image{
   img{
    height:fit-content;
  }
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
  padding: 0 20px;
  gap: 2%;
  flex-basis: fit-content;
  justify-content: space-between;
}

.answer {
   user-select: none;
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
    
      <span>flow-question:{{$services.toolService.flowQuestion}}</span>
      <div class="teams-container">
       <DisplayTeams :keys="keys" />
      </div>
    </div>


    <div class="prepare" 
      v-on:click="showQuestion()"
      v-if="$services.toolService.flowQuestion === 1">
      Bereit?
    </div>

    <div class="question-container" 
      v-on:click="resolve()"
      v-if="quizz && $services.toolService.flowQuestion > 1">
      <div class="question">
        <div class="question-text">{{quizz.question}} </div>
        <div class="question-image">
         <img :src="'./assets/images/quizzes/' + quizz.image" />  
        </div>
      </div>
     
    </div>
    <div class="answers-container" v-if=" quizz  && $services.toolService.flowQuestion > 1">
      
      <div 
        class="answer" 
        v-for="option in quizz.options" 
        :key="option.letter"
        :class="[isSelected(option.letter),  isRight(option.letter)]"
        v-on:click="setAnswerSeleted(option.letter)"
        >
        <div class="answer-letter">{{option.letter}}:</div>
        <div class="answer-text">{{option.text}}</div>
      </div>

     
    </div>


  </div>
</template>