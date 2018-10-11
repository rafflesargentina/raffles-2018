const authUser = state => {
    return state.auth.user
}

const isAuthenticated = state => {
    return state.auth.isAuthenticated
}

const username = state => {
    return undefined != state.auth.user ? state.auth.user.email : "..."
}

export {
    authUser,
    isAuthenticated,
    username
}
