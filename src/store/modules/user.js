import { login } from '@/api/system'
import { getItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/contant'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN)
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login (context, userInfo) {
      return new Promise((resolve, reject) => {
        return login(userInfo)
          .then((data) => {
            this.commit('user/setToken', data.token)
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
