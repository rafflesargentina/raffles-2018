<template>
  <div class="d-flex align-items-center full-height text-center">
    <h1 class="w-100 display-4">Cerrarando sesión...</h1>
  </div>
</template>

<script>
export default {
    mounted() {
        return this.$store.dispatch("logout")
    }
}
</script>
