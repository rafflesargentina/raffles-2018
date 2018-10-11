import * as types from "../mutation-types"

const token = sessionStorage.getItem("token") || localStorage.getItem("token")

const state = {
    authorization: "",

    error: "",

    isAuthenticated: null !== token,

    pending: !!this.isAuthenticated,

    token: token,

    user: {}
}

const mutations = {
    [types.AUTH_ERROR] (state, payload) {
        state.error = payload
        state.pending = true
        state.isAuthenticated = false
    },

    [types.AUTH_HEADER_SET] (state, payload) {
        state.authorization = payload
    },

    [types.AUTH_LOGIN_PENDING] (state) {
        state.pending = true
        state.isAuthenticated = false
    },

    [types.AUTH_LOGIN_SUCCESS] (state) {
        state.pending = false
        state.isAuthenticated = true
    },

    [types.AUTH_LOGOUT] (state) {
        state.pending = false
        state.isAuthenticated = false
    },

    [types.AUTH_TOKEN_STORE] (state, payload) {
        state.token = payload
    },

    [types.AUTH_USER] (state, payload) {
        state.user = payload
    }
}

export default {
    state,
    mutations
}
