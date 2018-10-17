export default {
    AUTH_ERROR (state, payload) {
        state.error = payload
        state.pending = true
        state.isAuthenticated = false
    },

    AUTH_HEADER_SET (state, payload) {
        state.authorization = payload
    },

    AUTH_LOGIN_PENDING (state) {
        state.pending = true
        state.isAuthenticated = false
    },

    AUTH_LOGIN_SUCCESS (state) {
        state.pending = false
        state.isAuthenticated = true
    },

    AUTH_LOGOUT (state) {
        state.pending = false
        state.isAuthenticated = false
    },

    AUTH_TOKEN_STORE (state, payload) {
        state.token = payload
    },

    AUTH_USER (state, payload) {
        state.user = payload
    }
}
