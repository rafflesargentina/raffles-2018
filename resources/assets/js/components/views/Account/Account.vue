<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <div class="row no-gutters account">
    <div class="col-md-2 d-none d-md-block">
      <aside class="sidebar sidebar--dark">
        <nav class="sidebar-nav">
          <h3 class="sidebar-nav-header">CUENTA</h3>
          <ul class="sidebar-nav__list">
            <li class="sidebar-nav__item sidebar-nav__item--dark">
              <router-link 
                to="/account" 
                class="sidebar-nav__link sidebar-nav__link--dark">Datos Personales</router-link>
            </li>
            <!--
            <li class="sidebar-nav__item sidebar-nav__item--dark">
              <router-link 
                to="/account/adquired-services" 
                class="sidebar-nav__link sidebar-nav__link--dark">Servicios Adquiridos</router-link>
            </li>
            <li class="sidebar-nav__item sidebar-nav__item--dark">
              <router-link
                to="/account/applications"
                class="sidebar-nav__link sidebar-nav__link--dark">Aplicaciones</router-link>
            </li>
            -->
          </ul>
        </nav>
      </aside>
    </div>
    <div class="col-12 col-md-10">
      <div class="account-inner">
        <transition 
          name="fade" 
          mode="out-in">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalData from "./PersonalData"

export default {
    components: {
        PersonalData,
    },

    data() {
        return {
            user: {}
        }
    },

    watch: {
        "$store.state.auth.user" () {
            this.user = this.$store.state.auth.user
        }
    },

    created() {
        return this.fetchUser()
    },

    methods: {
        fetchUser() {
            return window.axios.get("/api/user").then(response => {
                return this.user = response.data
            })
        }
    }
}
</script>
