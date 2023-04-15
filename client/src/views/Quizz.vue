<script>
import { toRaw } from 'vue';
import QuizzX4 from '../components/QuizzX4.vue'

export default {
  name: "Quizz",
  inject: ["$services"],
  data: () => ({
    t: {},
  }),
  methods: {
   
  },
  created() {
    const _ = this;
    _.t = this.$services.localeService.D();
  },
  mounted() {
    this.$services.toolService.fetchQuizzes().then((resp) => {
      this.$services.toolService.readToStore();
      this.$services.toolService.loadQuizz();
    
    });
  },
 
  components: {
    QuizzX4
  }
};
</script>

<style  lang="scss">
@import "../styles/media";


</style>

<template>

  <QuizzX4 
    v-if="$services.toolService.quizz && $services.toolService.quizz.type=='4-image'" 
    :quizz="$services.toolService.quizz" />

</template>