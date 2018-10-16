<template>
  <div class="register">
    <div class="register-inner">
      <main class="register-content card register__card shadow--two">
        <section class="register-section">
          <h3 class="register-header">Reestablecé tu contraseña</h3>
          <request-form/>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import RequestForm from "@/components/auth/passwords/RequestForm"

export default {
    components: {
        RequestForm,
    }
}
</script>
