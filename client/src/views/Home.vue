<script>

export default {
  name: "Home",
  inject: ["$services"],
  data: () => ({
    t: {},
    z: [],
  }),
  methods: {
    next: function(e){
     
      this.$router.push({path: '/teams'})
    },
  },
  created() {
    const _ = this;
    _.t = this.$services.localeService.D();
  },
  mounted() {
    document.body.style.overflow = "auto";
    this.$services.toolService.fetchQuizzes().then((resp) => {
      this.z = resp;
    });
  },
  components: {},
};
</script>

<style  lang="scss">
@import "../styles/media";

.logo-container{
  display: flex;
  width:100%;
  height: 100%;
  justify-content: center;
  align-items:center;
  cursor:pointer;
}

</style>

<template>
  <div class="layout-home">
    <div class="logo-container" v-on:click="next()" >
      <img src="/assets/images/intro.svg" />
    </div>
  </div>
</template>