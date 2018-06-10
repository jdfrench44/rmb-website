<template>
  <div class="shows">
    <songkick-schedule></songkick-schedule>
  </div>
</template>

<script>
import songkickSchedule from './songkickSchedule.vue'

export default {
  name: 'Shows',
  components: {
    songkickSchedule
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shows {
  padding: 10px;
}
</style>
