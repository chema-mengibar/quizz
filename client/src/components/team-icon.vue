<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 53 60`" 
  >

  <path 
    d="M26.4011 30.5C34.6044 30.5 41.4011 23.8216 41.4011 15.5C41.4011 7.29417 34.607 0.5 26.4011 0.5C18.0795 0.5 11.4011 7.29671 11.4011 15.5C11.4011 23.8191 18.082 30.5 26.4011 30.5ZM32.0652 34.9375H20.6238C9.46889 34.9375 0.526123 44.0011 0.526123 55.1484C0.526123 57.5769 2.4492 59.5 4.87769 59.5H47.8113C50.2207 59.5 52.2761 57.5956 52.2761 55.1484C52.2761 43.9973 43.2163 34.9375 32.0652 34.9375Z" 
    :fill="fill"
    :stroke="stroke"
    stroke-width="3"
  />
  </svg>
</template>
<script>
export default {
  name: 'Back',
  props: {
    w: { type: [Number, String], default: 53 },
    h: {type: [Number, String], default: 60 },
    fill: {type: String, default: 'transparent'},
    stroke: {type: String, default: 'transparent'}
  }
}
</script>