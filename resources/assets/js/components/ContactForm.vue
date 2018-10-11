<style lang="scss" scoped>
textarea {
  height: 13.25rem;
}
</style>

<template>
  <form 
    :class="[validated ? 'needs-validation' : 'needs-validation']"
    action="/contact"
    method="POST"
    novalidate
    @submit.prevent="submitForm" 
    @keydown="form.errors.clear($event.target.name)">
    <div class="row mb-3">
      <div class="col-md-5">
        <div class="form-group">
          <label for="name">Ingrese su nombre *</label>
          <input
            :class="{ 'is-invalid': form.errors.has('name') }"
            v-model="form.name"
            class="form-control gradient-border--one"
            name="name"
            placeholder="Nombre"
            type="text">
          <span
            v-if="form.errors.has('name')"
            class="invalid-feedback"
            role="alert">
            <strong v-text="form.errors.get('name')"/>
          </span>
        </div>

        <div class="form-group">
          <label for="email">Ingrese su dirección de Email *</label>
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
          <label for="phone">Ingrese un teléfono de contacto</label>
          <input
            :class="{ 'is-invalid': form.errors.has('phone') }"
            v-model="form.phone"
            class="form-control gradient-border--one"
            name="phone"
            placeholder="Teléfono"
            type="text">
          <span
            v-if="form.errors.has('phone')"
            class="invalid-feedback"
            role="alert">
            <strong v-text="form.errors.get('phone')"/>
          </span>
        </div>
      </div>

      <div class="col-md-7">
        <div class="form-group">
          <label for="message">Mensaje *</label>
          <textarea
            :class="{ 'is-invalid': form.errors.has('message') }"
            v-model="form.message"
            class="form-control gradient-border--one"
            name="message"
            placeholder="Mensaje"/>
          <span
            v-if="form.errors.has('message')"
            class="invalid-feedback"
            role="alert">
            <strong v-text="form.errors.get('message')"/>
          </span>
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-5">
        <button
          :disabled="submitted"
          class="btn btn-lg btn-block btn-primary gradient-background--one border-0"
          type="submit">
          <span class="fa fa-envelope pr-2"/>Enviar mensaje
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import Form from "../utilities/Form"

let fields = {
    email: "",
    message: "",
    name: "",
    phone: "",
}

export default {

    name: "ContactForm",

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
        submitForm() {
            this.submitted = true

            this.form.post("/contact")
                .then(()=> {
                    this.form.reset()
                    return this.$snotify.success("Tu mensaje fue enviado correctamente.")
                }).catch(error => {
                    this.submitted = false
                    if (error.status > 422) {
                        this.$snotify.error("Ocurrió un error con el siguiente mensaje: " + error.data.message)
                    }
                })
        },
    },
}
</script>
