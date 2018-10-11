<template>
  <div class="contact">
    <div class="contact-inner">
      <main class="contact-content card contact__card shadow--two">
        <section class="contact-section">
          <h3 class="contact-header">ENVIANOS UN MENSAJE</h3>
          <contact-form/>
        </section>
      </main>
    </div>
    <form-legal/>
  </div>
</template>

<script>
import ContactForm from "../ContactForm"
import FormLegal from "../legal/FormLegal"

export default {
    components: {
        ContactForm,
        FormLegal
    }
}
</script>
