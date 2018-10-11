<template>
  <form 
    :class="[validated ? 'needs-validation' : 'needs-validation']"
    action="/login"
    aria-label="Ingresá"
    method="POST"
    novalidate
    @keydown="form.errors.clear($event.target.name)"
    @submit.prevent="login">
    <div class="form-group">
      <label for="email">Email</label>
      <input 
        :class="{ 'is-invalid': form.errors.has('email') }" 
        v-model="form.email"
        class="form-control gradient-border--one" 
        name="email" 
        placeholder="Email"
        type="email">
      <span 
        v-if="form.errors.has('email')"
        class="invalid-feedback"
        role="alert">
        <strong v-text="form.errors.get('email')"/>
      </span>
    </div>

    <div class="form-group">
      <label 
        class="w-100"
        for="password" 
      >Contraseña <router-link
        class="login__link login__link--forgot-password"
        to="/password/request">¿Olvidaste tu contraseña?</router-link></label>
      <input 
        :class="{ 'is-invalid': form.errors.has('password') }" 
        v-model="form.password"
        class="form-control gradient-border--one" 
        name="password"
        placeholder="Contraseña"
        type="password">
      <span 
        v-if="form.errors.has('password')"
        class="invalid-feedback"
        role="alert">
        <strong v-text="form.errors.get('password')"/>
      </span>
    </div>

    <div class="form-group">
      <div class="form-check">
        <label>
          <input 
            v-model="form.remember" 
            class="form-check-input"
            name="remember"
            type="checkbox"> Mantener mi sesión abierta.</label>
      </div>
    </div>

    <button 
      :disabled="submitted"
      type="submit" 
      class="btn btn-block btn-lg border-0 btn-primary gradient-background--one"><span class="fa fa-sign-in pr-2"/>Ingresá</button>
  </form>
</template>

<script>
import Form from "../../utilities/Form"

let fields = {
    email: "",
    password: "",
    remember: "",
}

export default {

    name: "LoginForm",

    data() {
        return {
            form: new Form(fields),
            submitted: false
        }
    },

    computed: {
        validated() {
            return this.form.errors.any()
        }
    },

    methods: {
        login() {
            this.submitted = true

            this.form.post("/login")
                .then(response => {
                    return this.$store.dispatch("login", response)
                })
                .then(response => {
                    let redirect = this.$route.query.intended || response.redirect
                    return this.$router.push({ path: redirect })
                })
                .catch(error => {
                    this.submitted = false
                    console.error(error)
                })
        },
    },
}
</script>
