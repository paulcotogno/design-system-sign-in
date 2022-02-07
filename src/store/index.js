import {createStore} from 'vuex'

// Create a new store instance.
export const store = createStore({
    state() {
        return {
            password: "",
            userName: "default"
        }
    },
    mutations: {
        setUsername(state, userName) {
            state.userName = userName
        },
        setPassword(state, password) {
            state.password = password
        }
    }
})