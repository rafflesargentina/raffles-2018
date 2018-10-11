<template>
  <form
    :class="[validated ? 'needs-validation' : 'needs-validation']"
    action="/password/email"
    method="POST"
    novalidate
    @keydown="form.errors.clear($event.target.name)"
    @submit.prevent="request">

    <div class="form-group">
      <label for="email">E-Mail</label>
      <input
        :class="{ 'is-invalid': form.errors.has('email') }"
        v-model="form.email"
        class="form-control gradient-border--one"
        name="email"
        required
        type="email">
      <span
        v-if="form.errors.has('email')"
        class="invalid-feedback"
        role="alert">
        <strong v-text="form.errors.get('email')"/>
      </span>
    </div>
    <button
      :disabled="submitted"
      class="btn btn-block btn-lg border-0 btn-primary gradient-background--one"
      type="submit"><span class="fa fa-envelope pr-2"/>Enviar</button>
  </form>
</template>

<script>
import Form from "../../../utilities/Form"

let fields = {
    email: "",
}

export default {

    name: "RequestForm",

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
        request() {
            this.submitted = true

            this.form.post("/password/email")
                .then(response => {
                    return this.$router.push(response.redirect)
                })
                .catch(()=> {
                    this.submitted = false
                })
        },
    },
}
</script>
