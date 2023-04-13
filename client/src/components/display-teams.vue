<script>
import TeamIcon from './team-icon.vue'

export default {
  inject: ['$services'],
  name: 'DisplayTeams',
  props: {
    keys: { type: Array, default: null},
  },
  data: ()=>( {
    t: {},
  }),
  created(){
    this.t = this.$services.localeService.D()
  },
  methods: {
    mapFillFromKeyAndId: function(key, idx){
      const team = this.$services.toolService.getTeamByKey(key);
      if(team && idx === 0){
       return `var(--t${team.color}-color)`;
      }
      return 'transparent';
    },
    mapStrokeFromKeyAndId: function(key, idx){
      const team = this.$services.toolService.getTeamByKey(key);
      if(team && idx > 0){
       return `var(--t${team.color}-color)`;
      }
      return 'transparent';
    },
    mapHeightFromIdx: function(idx){
      if(idx > 0){
       return 40;
      }
      return undefined;
    }
  },
  components: {
    TeamIcon,
  },
}
</script>

<style lang="scss">

@import '../styles/media';

.display-teams{
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items:center;
  height:100%;

  .team{
    cursor:pointer;
  }
}

</style>

<template>
<div class="display-teams">
  <div class="team" 
    v-for="(key, index) in keys" :key="key">
    <TeamIcon
      :h="mapHeightFromIdx(index)"
      :fill="mapFillFromKeyAndId(key, index)" 
      :stroke="mapStrokeFromKeyAndId(key, index)" />
  </div>
</div>
  
</template>