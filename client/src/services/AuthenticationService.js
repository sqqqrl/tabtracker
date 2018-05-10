import API from '@/services/Api'

export default {
  register (credentials) {
    return API().post('register', credentials)
  },
  login (credentials) {
    return API().post('login', credentials)
  }
}
