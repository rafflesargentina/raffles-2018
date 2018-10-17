<template>
  <form
    :class="[validated ? 'needs-validation' : 'needs-validation']"
    method="POST"
    action="/password/reset"
    novalidate
    @submit.prevent="reset"
    @keydown="form.errors.clear($event.target.name)">

    <div class="form-group">
      <label
        for="email"
      >Email</label>
      <input 
        v-model="form.token" 
        type="hidden" 
        name="token">
      <input
        :class="{ 'is-invalid': form.errors.has('email') }"
        class="form-control"
        name="email"
        placeholder="Email"
        type="email"
        v-model="form.email">
      <span
        class="invalid-feedback"
        role="alert"
        v-if="form.errors.has('email')">
        <strong v-text="form.errors.get('email')"/>
      </span>
    </div>

    <div class="form-group">
      <label
        for="password"
      >Contraseña</label>
      <input
        :class="{ 'is-invalid': form.errors.has('password') }"
        class="form-control"
        name="password"
        placeholder="Contraseña"
        type="password"
        v-model="form.password">
      <span
        class="invalid-feedback"
        role="alert"
        v-if="form.errors.has('password')">
        <strong v-text="form.errors.get('password')"/>
      </span>
    </div>

    <div class="form-group">
      <label
        for="password-confirm"
      >Confirmación de contraseña</label>

      <input
        :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
        class="form-control"
        name="password_confirmation"
        placeholder="Confirmación de contraseña"
        type="password"
        v-model="form.password_confirmation">
      </div>
    </div>
    <button
      :disabled="submitted"
      class="btn btn-block btn-lg border-0 btn-primary gradient-background--one"
      type="submit"><span class="fa fa-key pr-2"/>Reestablecer</button>
  </form>
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

    created() {
        return this.form.token = this.$route.params.token
    },

    computed: {
        validated() {
            return this.form.errors.any()
        }
    },

    methods: {
        reset() {
            this.submitted = true

            this.form.post("/password/reset").then(response => {
                this.form.reset()
                this.$snotify.success(response.message)
                return this.$router.push(response.redirect)
            }).catch(error => {
                this.submitted = false
                if (error.status > 422) {
                    this.$snotify.error("Ocurrió un error con el siguiente mensaje: " + error.data.message)
                }
            })
        },
    }
}
</script>
