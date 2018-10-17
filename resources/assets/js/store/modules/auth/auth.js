import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

const token = sessionStorage.getItem("token") || localStorage.getItem("token")

const state = {
    authorization: "",

    error: "",

    isAuthenticated: null !== token,

    pending: !!this.isAuthenticated,

    token: token,

    user: {}
}

export default {
    actions,
    getters,
    mutations,
    state
}
