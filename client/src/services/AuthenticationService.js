import API from '@/services/Api'

export default {
  register (credentials) {
    return API().post('register', credentials)
  }
}
