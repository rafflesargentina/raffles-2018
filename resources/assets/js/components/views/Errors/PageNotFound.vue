<template>
  <error-page>
    <h4 
      slot="subtitle" 
      class="error_page__subtitle">Error 404</h4>
    <h1 
      slot="title" 
      class="error_page__title display-4">NO ENCONTRADO</h1>
    <p 
      slot="description" 
      class="error_page__p">La página a la que estás intentando acceder no pudo ser encontrada.</p>
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
