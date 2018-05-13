import API from '@/services/Api'

export default {
  index () {
    return API().get('songs')
  },

  post (song) {
    return API().post('songs', song)
  }
}
