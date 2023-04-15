<script>
import { toRaw } from 'vue';

export default {
  name: "Config",
  inject: ["$services"],
  data: () => ({
    t: {},
    quizzesIds: [],
    quizzesLibrary:[],
    programm_cursor: 0,
    programm_quizz_cursor: 0,
    program:[
      {
        type: 'all_teams',
        count: 20,
        quizzes:[]
      },
      {
        type: 'single_teams',
        count: 10,
        quizzes:[]
      },
      {
        type: 'all_teams',
        count: 20,
        quizzes:[]
      }
    ],

  }),
  methods: {
    getRandomInt: function ( max) {
      return Math.floor(Math.random() * Math.floor(max)) + 0;
    },
    generate: function( targetList ){

      if(this.quizzesLibrary.length === 0){
        return;
      }

      console.log('LENGTH: ', this.quizzesLibrary.length)
      console.log('quizzesLibrary: ', toRaw(this.quizzesLibrary))
      const seletectedIdx = this.getRandomInt(this.quizzesLibrary.length );
      const num = this.quizzesLibrary[seletectedIdx].id;
      targetList.push(num)
      this.quizzesLibrary = this.quizzesLibrary.filter(function (n) {
          return n.id !== num;
      });;
  
      console.log('seletectedIdx: ',seletectedIdx)
      console.log('num: ',  num)
      console.log('LENGTH: ', targetList.length)
      console.log('------------')
    },
    generatePrograms: function(){
      for(let p= 0; p < this.program.length; p+=1 ){
        for(let c= 0; c < this.program[p].count; c+=1 ){
            this.generate(  this.program[p].quizzes )
        }
      }
    },
    saveToStore: function(){
      localStorage.setItem("programm_cursor", this.programm_cursor);
      localStorage.setItem("programm_quizz_cursor", this.programm_quizz_cursor);
      localStorage.setItem("programm", JSON.stringify(this.program));
    },
    readToStore: function(){
      const a = localStorage.getItem("programm_cursor");
      const b =  localStorage.getItem("programm_quizz_cursor");
      const c = localStorage.getItem("programm");

      if(a && b && c ){
        this.programm_cursor = parseInt(localStorage.getItem("programm_cursor"));
        this.programm_quizz_cursor = parseInt(localStorage.getItem("programm_quizz_cursor"));
        this.program = JSON.parse(localStorage.getItem("programm"));
        return true;
      }else{
        console.log('storage empty')
        return false;
      }
    }
  },
  created() {
    const _ = this;
    _.t = this.$services.localeService.D();
  },
  mounted() {

    this.$services.toolService.fetchQuizzes().then(resp=>{
      // console.log(resp)
      
      const isStored = this.readToStore();
      if(!isStored){
        // const len = 25; // [...Array(len).keys()]
        this.quizzesLibrary = resp; 

        this.generatePrograms();
        this.saveToStore();
      }
    });

 
  
  },
  unmounted(){
   
  },
  components: {
    
  },
};
</script>

<style  lang="scss">
@import "../styles/media";


</style>

<template>
    <button v-on:click="generate()">generate</button>
</template>