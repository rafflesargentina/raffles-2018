import * as actions from "./actions"
import * as getters from "./getters"
import auth from "./modules/auth"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
        auth
    },
    strict: true,
})

export default store
