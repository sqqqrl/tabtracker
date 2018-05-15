<template>
  <panel title="Songs">
    <v-btn
      slot="action"
      fab
      class="cyan accent-2"
      light
      absolute
      right
      middle
      medium
      :to="{
        name: 'songs-create'
      }">
      <v-icon>add</v-icon>
    </v-btn>
    <div
      class="song"
      v-for="song in songs"
      :key="song.id">

      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>

          <div class="song-artist">
            {{song.artist}}
          </div>

          <div class="song-genre">
            {{song.genre}}
          </div>

          <v-btn
            dark
            class="cyan"
            :to="{
              name: 'song',
              params:{
                songId: song.id
              }
            }">
            View
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <img class="album-img" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },

  async mounted () {
    this.songs = (await SongsService.index()).data
  },

  watch: {
    '$route.query.search': {
      immdiate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-img {
  width: 70%;
  margin: 0 auto;
}
</style>
