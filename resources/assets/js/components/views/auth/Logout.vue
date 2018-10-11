<template>
  <div class="d-flex align-items-center full-height w-100">
    <h6 class="text-center">Cerrarando sesión...</h6>
  </div>
</template>

<script>
export default {
    mounted() {
        return this.$store.dispatch("logout")
    }
}
</script>
