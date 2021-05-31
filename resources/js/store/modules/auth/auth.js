import axios from 'axios'

export default {

    state: {
        me: {
            name: '',
            email: ''
        },
        authenticated: false
    },

    mutations: {
        SET_ME(state, me) {
            state.me = me
            state.authenticated = true
        },
        SET_AUTHENTICATED(state, status) {
            state.authenticated = status
        },
        LOGOUT(state) {
            state.me = {
                name: '',
                email: ''
          }
          state.authenticated = false
        }
    },

    actions: {
      register({commit}, params)
      {
        return axios.post('/auth/register')
      },

      getMe({ commit }) {
        const token = localStorage.getItem('token');
        if (!token) return
        
        
      }
    }

}
