<template>
  <panel title="YouTube Video">
    <div>
      <youtube
        :video-id="youtubeId"
        :player-wdth="500"
        :player-height="330">
      </youtube>
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
