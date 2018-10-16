<template>
  <div>
    <form
      :class="[validated ? 'needs-validation' : 'needs-validation']"
      method="POST"
      action="/password/reset"
      novalidate
      @submit.prevent="reset"
      @keydown="form.errors.clear($event.target.name)">
      <div class="form-group row">
        <input 
          v-model="token" 
          type="hidden" 
          name="token">
        <label
          for="email"
          class="col-sm-4 col-form-label text-md-right">Email</label>
        <div class="col-md-6">
          <input
            :class="{ 'is-invalid': form.errors.has('email') }"
            v-model="form.email"
            class="form-control"
            type="email"
            name="email"
            placeholder="Email"
            autofocus="">
          <span
            v-if="form.errors.has('email')"
            class="invalid-feedback"
            role="alert">
            <strong v-text="form.errors.get('email')"/>
          </span>
        </div>
      </div>

      <div class="form-group row">
        <label
          for="password"
          class="col-md-4 col-form-label text-md-right">Contraseña</label>
        <div class="col-md-6">
          <input
            :class="{ 'is-invalid': form.errors.has('password') }"
            v-model="form.password"
            class="form-control"
            type="password"
            name="password"
            placeholder="Contraseña">
          <span
            v-if="form.errors.has('password')"
            class="invalid-feedback"
            role="alert">
            <strong v-text="form.errors.get('password')"/>
          </span>
        </div>
      </div>

      <div class="form-group row">
        <label
          for="password-confirm"
          class="col-md-4 col-form-label text-md-right">Confirmación de contraseña</label>

        <div class="col-md-6">
          <input
            :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
            v-model="form.password_confirmation"
            class="form-control"
            type="password"
            name="password_confirmation"
            placeholder="Confirmación de contraseña"
            required>
        </div>
      </div>

      <div class="form-group row mb-0">
        <div class="col-md-6 offset-md-4">
          <button 
            type="submit" 
            class="btn btn-primary">Reestablecer</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Form from "@/utilities/Form"

let fields = {
    email: "",
    token: "",
    password: "",
    password_confirmation: "",
}

export default {

    name: "ResetForm",

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
        reset() {
            this.submitted = true

            this.form.post("/password/reset")
                .then(response => {
                    return this.$router.push(response.redirect)
                })
                .catch(error => {
                    this.submitted = false
                    console.log(error)
                })
        },
    },
}
</script>
