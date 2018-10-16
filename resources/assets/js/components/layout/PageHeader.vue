<template>
  <header class="page-header page-header--light">
    <div class="row no-gutters">
      <a 
        href="/" 
        class="col-9 col-lg-3 page-header-logo"/>

      <nav class="col-lg-6 main-nav d-none d-lg-inline-block">
        <ul class="main-nav__list">
          <li class="main-nav__item main-nav__item--light"><router-link 
            to="/" 
            class="main-nav__link main-nav__link--light">INICIO</router-link></li>
          <li class="main-nav__item main-nav__item--light"><router-link 
            to="/company" 
            class="main-nav__link main-nav__link--light">EMPRESA</router-link></li>
          <li class="main-nav__item main-nav__item--light"><router-link 
            to="/services" 
            class="main-nav__link main-nav__link--light">SERVICIOS</router-link></li>
          <li class="main-nav__item main-nav__item--light"><router-link 
            to="/portfolio" 
            class="main-nav__link main-nav__link--light">PORTFOLIO</router-link></li>
          <li class="main-nav__item main-nav__item--light"><router-link 
            to="/contact" 
            class="main-nav__link main-nav__link--light">CONTACTO</router-link></li>
        </ul>
      </nav>

      <nav 
        id="mainNavMenu" 
        class="main-nav main-nav-menu collapse d-lg-none">
        <ul class="main-nav__list">
          <li class="main-nav__item main-nav__item--dark"><router-link
            to="/"
            class="main-nav__link main-nav__link--dark">INICIO</router-link></li>
          <li class="main-nav__item main-nav__item--dark"><router-link
            to="/company"
            class="main-nav__link main-nav__link--dark">EMPRESA</router-link></li>
          <li class="main-nav__item main-nav__item--dark"><router-link
            to="/services"
            class="main-nav__link main-nav__link--dark">SERVICIOS</router-link></li>
          <li class="main-nav__item main-nav__item--dark"><router-link
            to="/portfolio"
            class="main-nav__link main-nav__link--dark">PORTFOLIO</router-link></li>
          <li class="main-nav__item main-nav__item--dark"><router-link
            to="/contact"
            class="main-nav__link main-nav__link--dark">CONTACTO</router-link></li>
        </ul>
      </nav>

      <nav class="col-3 main-nav text-right">
        <ul class="main-nav__list d-lg-none text-right">
          <li class="main-nav__item main-nav__item--light d-inline-block d-lg-none"><a
            class="main-nav__link main-nav__link--light navbar-toggler" 
            data-toggle="collapse" 
            data-target="#mainNavMenu" 
            aria-controls="mainNavMenu" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            href="#"
          ><span class="fa fa-bars main-nav__icon"/></a></li>
        </ul>


        <ul class="main-nav__list d-none d-lg-inline-block">
          <li 
            v-if="!isAuthenticated" 
            class="main-nav__item main-nav__item--login d-none d-lg-inline-block"><router-link 
              to="/login" 
              class="main-nav__link main-nav__link--light">INGRESÁ</router-link></li>
          <li 
            v-if="!isAuthenticated" 
            class="main-nav__item d-none d-lg-inline-block"><router-link 
              to="/register" 
              class="main-nav__link main-nav__link--light">REGISTRATE</router-link></li>

          <li 
            v-if="isAuthenticated" 
            class="main-nav__item main-nav__item--light">
            <a 
              id="sessionMenuLink" 
              href="#" 
              class="main-nav__link main-nav__link--light dropdown-toggle" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"><span class="fa fa-user pr-2"/>{{ username }}</a>
            <div 
              class="dropdown-menu" 
              aria-labelledby="sessionMenuLink">
              <router-link 
                class="dropdown-item" 
                to="/account">Cuenta</router-link>
              <div class="dropdown-divider"/>
              <router-link
                class="dropdown-item" 
                to="/logout">Cerrar sesión</router-link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

    name: "PageHeader",

    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated
        },

        username() {
            let username = this.$store.getters.username
            if (undefined != username) {
                if (username.length > 20) {
                    return username.substr(0, 17) + "..."
                }

                return username
            }

            return "..."
        }
    },
}
</script>
