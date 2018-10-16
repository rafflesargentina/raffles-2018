import * as actions from "@/store/actions"
import * as getters from "@/store/getters"
import auth from "@/store/modules/auth"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
        auth,
    },
    strict: process.env.NODE_ENV !== 'production'
})

export default store
