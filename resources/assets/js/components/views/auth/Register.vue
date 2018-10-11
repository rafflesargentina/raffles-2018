<template>
  <div class="register">
    <div class="register-inner">
      <main class="register-content card register__card shadow--two">
        <section class="register-section">
          <h3 class="register-header"><router-link 
            to="/login" 
            class="register__link register__link--login">INGRESÁ</router-link> / <router-link 
              to="/register" 
              class="register__link register__link--register">REGISTRATE</router-link></h3>
          <register-form/>
        </section>
      </main>
    </div>
    <form-legal/>
  </div>
</template>

<script>
import FormLegal from "../../legal/FormLegal"
import RegisterForm from "../../auth/RegisterForm"

export default {
    components: {
        FormLegal,
        RegisterForm
    }
}
</script>
