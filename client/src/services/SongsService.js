import API from '@/services/Api'

export default {
  index () {
    return API().get('songs')
  },

  show (songId) {
    return API().get(`songs/${songId}`)
  },

  post (song) {
    return API().post('songs', song)
  },
  put (song) {
    return API().put(`songs/${song.id}`, song)
  }
}
