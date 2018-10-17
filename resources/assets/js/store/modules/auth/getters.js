export default {
    authUser (state) {
        return state.user
    },

    isAuthenticated (state) {
        return state.isAuthenticated
    },

    username (state) {
        return undefined != state.user ? state.user.email : "..."
    }
}
