<template>
  <div class="register">
    <div class="register-inner">
      <main class="register-content card register__card shadow--two">
        <section class="register-section">
          <h3 class="register-header">Reestablecé tu contraseña</h3>
          <reset-form/>
        </section>
      </main>
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
