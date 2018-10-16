<template>
  <div class="login">
    <div class="login-inner">
      <main class="login-content card login__card shadow--two">
        <section class="login-section">
          <h3 class="login-header"><router-link 
            to="/login" 
            class="login__link login__link--login">INGRESÁ</router-link> / <router-link 
              to="/register" 
              class="login__link login__link--register">REGISTRATE</router-link></h3>
          <login-form/>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm"

export default {
    components: {
        LoginForm,
    }
}
</script>
