<template>
  <error-page>
    <h4 
      slot="subtitle" 
      class="error_page__subtitle">Contenido</h4>
    <h1 
      slot="title" 
      class="error_page__title display-4">NO DISPONIBLE</h1>
    <p 
      slot="description" 
      class="error_page__p">Estamos actualizando el contenido del sitio. Por favor, volvé a revisar esta sección más tarde o escribinos a <a href="mailto:contacto@raffles.com.ar">contacto@raffles.com.ar</a> para obtener información. Te pedimos disculpas por el incoveniente.</p>
  </error-page>
</template>

<script>
import ErrorPage from "@/components/ErrorPage"

export default {
    components: {
        ErrorPage,
    }
}
</script>
