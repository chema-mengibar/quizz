<script>
export default {
  name: "Home",
  inject: ["$services"],
  data: () => ({
    t: {},
    z: [],
  }),
  methods: {},
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
}

</style>

<template>
  <div class="layout-home">
    <div class="logo-container">
      <img src="assets/images/intro.svg" />
    </div>
  </div>
</template>