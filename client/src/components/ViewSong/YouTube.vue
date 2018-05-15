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
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
