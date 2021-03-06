import * as types from "../../mutation-types"

export default {
    fetchAuthUser ({ commit, dispatch }) {
        window.axios.get("/api/user")
            .then(response => {
                const user = response.data
                commit(types.AUTH_USER, user)
                return user
            })
            .catch(error => {
                commit(types.AUTH_ERROR, error)
                dispatch("logout")
            })
    },

    login ({ commit, dispatch }, response) {
        commit(types.AUTH_LOGIN_PENDING)

        return new Promise((resolve, reject) => {
            const token = response.token
            const remember = response.remember

            dispatch("storeToken", { token, remember })
                .then(()=> {
                    return dispatch("setAuthorizationHeader", token)
                })
                .then(()=> {
                    commit(types.AUTH_LOGIN_SUCCESS, response)
                    return dispatch("fetchAuthUser")
                })
                .catch(error => {
                    reject(error)
                })

            resolve(response)
        })
    },

    logout ({ commit }) {
        return new Promise((resolve, reject) => {
            commit(types.AUTH_LOGOUT)

            localStorage.removeItem("token")
            sessionStorage.removeItem("token")

            delete window.axios.defaults.headers.common["Authorization"]

            window.axios.get("/logout").then(response => {
                return window.location.href = response.data.redirect
            })
                .catch(error => {
                    reject(error)
                })

            resolve()
        })
    },

    setAuthorizationHeader ({ commit }, token) {
        return new Promise(resolve => {
            const authorization = "Bearer " + token
            window.axios.defaults.headers.common["Authorization"] = authorization
            commit(types.AUTH_HEADER_SET, authorization)
            resolve()
        })
            .catch(error => {
                commit(types.AUTH_ERROR, error)
            })
    },

    storeToken ({ commit }, { token, remember }) {
        return new Promise(resolve => {
            if (remember) {
                localStorage.setItem("token", token)
            } else {
                sessionStorage.setItem("token", token)
            }

            commit(types.AUTH_TOKEN_STORE, token)
            resolve()
        })
            .catch(error => {
                commit(types.AUTH_ERROR, error)
            })
    }
}
