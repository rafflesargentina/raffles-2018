<template>
  <div class="portfolio-page">
    <div class="services">
      <div class="services-inner">
        <main class="services-content">
          <section class="services-section">
            <div class="services-header">
              <h1>PORTFOLIO</h1>
            </div>
            <div class="row">
              <div 
                v-for="work in works" 
                class="col-sm-4 mb-3">
                <div class="card services__card shadow--one">
                  <div class="services__card-img pb-0">
                    <img
                      :src="work.img"
                      class="services__img shadow--one">
                  </div>
                  <div class="card-body services__card-body text-center">
                    <h3 class="card__title">{{ work.name }}</h3>
                    <div class="card__p">{{ work.description.substr(0,250) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            works: [
            ]
        }
    },

    computed: {
        chunks() {
            return window._.chunk(this.works, 4)
        }
    }
}
</script>
