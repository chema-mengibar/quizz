<script>
export default {
  name: "Teams",
  inject: ["$services"],
  data: () => ({
    t: {},
    teams: [],
  }),
  methods: {
    gotoQuizz: function(){
      const {query} = this.$route;
      this.$router.push({ path: '/quizz', query })
    }
  },
  created() {
    const _ = this;
    _.t = this.$services.localeService.D();

    this.teams = this.$services.toolService.getTeamsByPoints();
  },
  mounted() {},
  components: {},
};
</script>

<style  lang="scss">
@import "../styles/media";

.bars-container {
  cursor:pointer;
  width: 60%;
  height: 80%;
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
}

.teams-bars-row {
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  .team-bar {

    flex: 1;
    width: 25%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    &.t1-c {
      border-bottom: 3px solid var(--t1-color);
    }

    &.t2-c {
      border-bottom: 3px solid var(--t2-color);
    }

    &.t3-c {
      border-bottom: 3px solid var(--t3-color);
    }

    &.t4-c {
      border-bottom: 3px solid var(--t4-color);
    }

    .bar {
      width: 80%;
      height: 10px;
    }
  }
}

.teams-points-row {
  height: 20%;
  width: 100%;
  gap: 30px;
  display: flex;
  justify-content: space-between;

  .team-points {
    color: white;
    width: 25%;
    text-align: center;
    font-size: xxx-large;
  }
}
</style>

<template>
  <div class="layout-teams">
    <div class="bars-container" v-on:click="gotoQuizz()">
      <div class="teams-bars-row">
        <div class="team-bar" :class="'t'+ item.color + '-c'"  v-for="item in this.teams" :key="item.color">
          <div class="bar" 
            :class="'t'+ item.color + '-bg'"
            v-bind:style="{ height: $services.toolService.getTeamsProcent(item.points) + '%' }"></div>
        </div>
      
      </div>
      <div class="teams-points-row">
        <div class="team-points" v-for="item in this.teams" :key="item.color">{{item.points}}</div>
       
      </div>
    </div>
  </div>
</template>