import store from "./store/store"

export const authRequired = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next()
        return
    }

    var intended = to.fullpath !== "/logout" ? to.fullPath : "/"
    next({name: "Login", query: { intended: encodeURI(intended) }})

}

export const authNotRequired = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next()
        return
    }

    next({ name: "Home"})
}
