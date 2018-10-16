<template>
  <form
    :class="[validated ? 'needs-validation' : 'needs-validation']"
    method="POST"
    action="/account"
    novalidate
    aria-label="Datos Personales"
    @submit.prevent="updatePersonalData"
    @keydown="form.errors.clear($event.target.name)">

    <div class="row">
      <div class="col-sm-4 order-sm-2 mb-3">
        <div class="card account__card shadow--two">
          <div class="account__card-cover gradient-background--one"/>
          <div class="account__card-img">
            <div class="account__card-img-inner">
              <img 
                v-if="form.avatar" 
                :src="form.avatar_url"
                class="account__img preview shadow--one"
              >
              <div
                v-if="!form.avatar"
                class="account__img preview shadow--one"/>
            </div>
          </div>
          <section class="card-body account__card-body">
            <div class="account__card-header text-center">
              <h5>{{ fullname }}</h5>
              <i>{{ username }}</i>
            </div>
            <button
              class="btn btn-sm btn-block btn-outline-primary gradient-border--one"
              data-toggle="modal"
              data-target="#modalChangeAvatar"
              type="button">Cambiar foto</button>
          </section>
        </div>
      </div>

      <div class="col-sm-8 mb-3">
        <main class="account-content card account__card shadow--two"> 
          <section class="account-section">
            <h3 class="account-header">DATOS PERSONALES</h3>
            <div class="row">
              <div class="col-sm-6 form-group">
                <label
                  for="first_name"
                >Nombre</label>
                <input
                  :class="{ 'is-invalid': form.errors.has('first_name') }"
                  v-model="form.first_name"
                  type="text"
                  class="form-control gradient-border--one"
                  name="first_name"
                  required
                  autofocus>
                <span
                  v-if="form.errors.has('first_name')"
                  class="invalid-feedback"
                  role="alert">
                  <strong v-text="form.errors.get('first_name')"/>
                </span>
              </div>
              <div class="col-sm-6 form-group">
                <label
                  for="last_name"
                >Apellido</label>
        
                <input
                  :class="{ 'is-invalid': form.errors.has('last_name') }"
                  v-model="form.last_name"
                  type="text"
                  class="form-control gradient-border--one"
                  name="last_name"
                  required
                  autofocus>
        
                <span
                  v-if="form.errors.has('last_name')"
                  class="invalid-feedback"
                  role="alert">
                  <strong v-text="form.errors.get('last_name')"/>
                </span>
              </div>
            </div>
        
            <div class="form-group">
              <label
                for="email"
              >E-Mail</label>
        
              <input
                :class="{ 'is-invalid': form.errors.has('email') }"
                v-model="form.email"
                type="email"
                class="form-control gradient-border--one"
                name="email"
                required>
        
              <span
                v-if="form.errors.has('email')"
                class="invalid-feedback"
                role="alert">
                <strong v-text="form.errors.get('email')"/>
              </span>
            </div>

            <div class="form-group">
              <label
                for="password"
              >Contraseña</label>

              <input
                :class="{ 'is-invalid': form.errors.has('password') }"
                v-model="form.password"
                type="password"
                class="form-control gradient-border--one"
                name="password"
                required>

              <span
                v-if="form.errors.has('password')"
                class="invalid-feedback"
                role="alert">
                <strong v-text="form.errors.get('password')"/>
              </span>
            </div>

            <div class="form-group">
              <label
                for="password-confirm"
              >Confirmación de contraseña</label>

              <input
                :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
                v-model="form.password_confirmation"
                type="password"
                class="form-control gradient-border--one"
                name="password_confirmation"
                required>
            </div>

            <button
              type="submit"
              class="btn btn-block btn-lg border-0 btn-primary gradient-background--one"><span class="fa fa-check pr-2"/>Actualizar datos</button>
          </section>
        </main>
      </div>
    </div>
    <form-legal/>

    <div
      id="modalChangeAvatar"
      aria-hidden="true"
      aria-labelledby="modalTitleChangeAvatar" 
      class="modal fade"
      tabindex="-1"
      role="dialog">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 
              id="modaTitleChangeAvatar" 
              class="modal-title">Cambiar foto</h5>
            <button 
              type="button" 
              class="close" 
              data-dismiss="modal" 
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <vue-dropzone 
            id="dzAvatar"
            ref="dzAvatar"
            :options="dzOptions"
            @vdropzone-error="dzError"
            @vdropzone-files-added="dzAddOrRemoveFiles" 
            @vdropzone-removed-file="dzAddOrRemoveFiles" 
            @vdropzone-processing="dzSetUrl"
            @vdropzone-queue-complete="dzAccept"/>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-6">
                <button
                  :disabled="!dzHasAcceptedFiles"
                  class="btn btn-block btn-outline-primary gradient-border--one"
                  type="button"
                  @click="dzProcessQueue"><span class="fa fa-check pr-2"/>Aceptar</button>
              </div>
              <div class="col-sm-6">
                <button
                  class="btn btn-block btn-outline-primary gradient-border--one"
                  type="button"
                  @click="dzCancel"><span class="fa fa-times pr-2"/>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import vue2Dropzone from "vue2-dropzone"
import Form from "@/utilities/Form"
import FormLegal from "@/components/legal/FormLegal"

import "vue2-dropzone/dist/vue2Dropzone.min.css"

export default {

    name: "PersonalData",
    components: {
        FormLegal,
        vueDropzone: vue2Dropzone
    },

    data() {
        return {
            dzHasError: false,
            dzOptions: {
                addRemoveLinks: true,
                autoProcessQueue: false,
                headers: {
                    "X-CSRF-TOKEN": document.head.querySelector("meta[name=\"csrf-token\"]").content,
                },
                maxFiles: 1,
                maxFilesize: 0.2,
                method: "put",
                url: "/api/personal-data"
            },
            dzHasAcceptedFiles: false,
            form: new Form()
        }
    },

    computed: {
        avatarUrl() {
            return "/api/avatar/" + this.$parent.$data.user.id
        },

        dzAvatar() {
            return this.$refs.dzAvatar
        },

        fullname() {
            return this.form.first_name + " " + this.form.last_name
        },

        personalDataUrl() {
            return "/api/personal-data/" + this.$parent.$data.user.id
        },

        username() {
            return this.form.email
        },

        validated() {
            return this.form.errors.any()
        }
    },

    watch: {
        "$parent.$data.user" () {
            this.form = new Form(this.$parent.$data.user)
        }
    },

    methods: {
        dzAccept() {
            if (!this.dzHasError) {
                window.$("#modalChangeAvatar").modal("hide")
                return this.$parent.fetchUser()
            }
        },

        dzAddOrRemoveFiles() {
            return this.dzHasAcceptedFiles = this.dzAvatar.getAcceptedFiles().length > 0
        },

        dzCancel() {
            window.$("#modalChangeAvatar").modal("hide")
            return this.dzAvatar.removeAllFiles()
        },

        dzError() {
            return this.dzHasError = true
        },

        dzProcessQueue() {
            if (this.dzAvatar) {
                this.dzHasError = false
                return this.dzAvatar.processQueue()
            }
        },

        dzSetUrl() {
            if (this.dzAvatar) {
                return this.dzAvatar.setOption("url", this.avatarUrl)
            }
        },

        updatePersonalData() {
            this.form.put(this.personalDataUrl).then(()=> {
                return this.$snotify.success("Los datos de tu cuenta fueron actualizados")
            })
                .catch(error => {
                    this.$snotify.error("Ocurrió un error al intentar actualizar los datos de tu cuenta, con el siguiente mensaje: " + error.data.message)
                })
        },
    },
}
</script>
