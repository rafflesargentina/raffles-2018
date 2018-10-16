<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Reestablezca su contraseña</div>
          <div class="card-body">
            <reset-form/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResetForm from "@/components/auth/passwords/ResetForm"

export default {
    components: {
        ResetForm,
    }
}
</script>
