
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import store from "@/store"
import router from "@/routes"
import App from "@/components/App"
import Vue from "vue"
import Snotify from "vue-snotify"

require("@/bootstrap")

Vue.use(Snotify)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component(
    "passport-clients",
    require("@/components/passport/Clients.vue")
)

Vue.component(
    "passport-authorized-clients",
    require("@/components/passport/AuthorizedClients.vue")
)

Vue.component(
    "passport-personal-access-tokens",
    require("@/components/passport/PersonalAccessTokens.vue")
)

const app = new Vue({
    beforeCreate() {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token")

        if (null !== token) {
            this.$store.dispatch("auth/setAuthorizationHeader", token)
                .then(()=> {
                    return this.$store.dispatch("auth/fetchAuthUser")
                })
                .catch(error => {
                    console.error(error)
                })
        }

        window.axios.interceptors.response.use(undefined, function(error) {
            return new Promise(()=> {
                if ((error.status > 400 && error.status < 420) && error.config && !error.config.__isRetryRequest) {
                    return this.$store.dispatch("auth/logout")
                }

                throw error
            })
        })
    },

    render: (h) => h(App),
    router,
    store
}).$mount("#app")

export default app
