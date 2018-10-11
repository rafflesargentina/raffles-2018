<template>
  <div class="home-page">
    <div 
      id="carousel-one" 
      class="carousel-one carousel slide" 
      data-ride="carousel">
      <div class="carousel-inner">
        <ol class="carousel-indicators">
          <li 
            data-target="#carousel-one" 
            data-slide-to="0" 
            class="active"/>
          <li 
            data-target="#carousel-one" 
            data-slide-to="1"/>
        </ol>
        <section class="carousel-item carousel-one-item-one active">
          <div class="row">
            <div class="col-md-6">
              <div class="carousel-one-header">
                <h4 class="carousel-one__subtitle">Servicios</h4>
                <h1 class="carousel-one__title display-4">DESARROLLO WEB</h1>
                <p class="carousel-one__p">Realizamos proyectos a medida, ya sea un blog, o un gestor de contenidos, e-commerce, o una aplicación con API con integración en La Nube.</p>
                <div class="row">
                  <div class="col-md-6 col-lg-4">
                    <a 
                      href="#" 
                      class="btn btn-lg btn-block btn-outline-light d-none d-md-inline-block"><span class="fa fa-plus pr-2"/>Leer más</a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a 
                      href="#" 
                      class="btn btn-lg btn-block btn-outline-light d-none d-md-inline-block"><span class="fa fa-check pr-2"/>Contratar</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <img 
                class="carousel-one__img" 
                src="/img/web_development.min.svg">
            </div>
          </div>
        </section>
        <section class="carousel-item carousel-one-item-two">
          <div class="row">
            <div class="col-md-6">
              <div class="carousel-one-header">
                <h4 class="carousel-one__subtitle">Servicios</h4>
                <h1 class="carousel-one__title display-4">CONSULTORÍA</h1>
                <p class="carousel-one__p">Te asesoramos en la planificación e implementación de tus proyectos. Brindamos soporte técnico en variedad de productos y servicios.</p>
                <div class="row">
                  <div class="col-md-6 col-lg-4">
                    <a 
                      href="#" 
                      class="btn btn-lg btn-block btn-outline-light d-none d-md-inline-block"><span class="fa fa-plus pr-2"/>Leer más</a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a 
                      href="#" 
                      class="btn btn-lg btn-block btn-outline-light d-none d-md-inline-block"><span class="fa fa-check pr-2"/>Contratar</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <img 
                class="carousel-one__img" 
                src="/img/consulting.min.svg">
            </div>
          </div>
        </section>
      </div>
      <a 
        class="carousel-control-prev" 
        href="#carousel-one" 
        role="button" 
        data-slide="prev">
        <span 
          class="carousel-control-prev-icon" 
          aria-hidden="true"/>
        <span class="sr-only">Previous</span>
      </a>
      <a 
        class="carousel-control-next" 
        href="#carousel-one" 
        role="button" 
        data-slide="next">
        <span 
          class="carousel-control-next-icon" 
          aria-hidden="true"/>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="company">
      <main class="company-content">
        <section class="company-section">
          <div class="row">
            <div class="col-md-6 order-md-2">
              <div class="company-header">
                <h4>Empresa</h4>
                <h1 class="display-4">QUIÉNES<br>SOMOS</h1>
              </div>
            </div>
            <div class="col-md-6">
              <p class="company__p">Somos una microempresa de origen Argentino formada por profesionales con una amplia trayectoria en la industria de las tecnologías de información. Nuestro modelo de negocio consiste en mantener y refinar una estructura de trabajo minimizada, que nos permite reducir costos y riesgos de tercerización, maximizando las ganancias. Nuestra compañía se encuentra en etapa Startup desde el año 2015.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
    <div class="services">
      <div class="services-inner">
        <main class="services-content">
          <section class="services-section">
            <div class="services-header">
              <h1>SERVICIOS</h1>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-4 mb-3">
                <div class="card services__card services__card--web_development shadow--one">
                  <div class="services__card-img pb-0">
                    <div class="services__card-img-inner">
                      <img 
                        class="services__img services__card-img--web_development shadow--one" 
                        src="/img/services_web_development.min.svg">
                    </div>
                  </div>
                  <div class="card-body services__card-body text-center">
                    <h3 class="card-title">DESARROLLO WEB</h3>
                    <p class="card__p">Realizamos proyectos a medida, ya sea un blog, o un gestor de contenidos, e-commerce, o una aplicación con API con integración en La Nube.</p>
                    <div class="row">
                      <div class="col-lg-6 mb-3">
                        <a 
                          href="#" 
                          class="btn btn-lg btn-block btn-outline-light"><span class="fa fa-plus pr-2"/>Leer más</a>
                      </div>
                      <div class="col-lg-6 mb-3">
                        <a 
                          href="#" 
                          class="btn btn-lg btn-block btn-outline-light"><span class="fa fa-check pr-2"/>Contratar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-4 mb-3">
                <div class="card services__card services__card--consulting shadow--one">
                  <div class="card-img services__card-img pb-0">
                    <div class="services__card-img-inner">
                      <img 
                        class="services__img services__card-img--consulting shadow--one" 
                        src="/img/services_consulting.min.svg">
                    </div>
                  </div>
                  <div class="card-body services__card-body text-center">
                    <h3 class="card-title">CONSULTORÍA</h3>
                    <p class="card__p">Te asesoramos en la planificación e implementación de tus proyectos. Brindamos soporte técnico en variedad de productos y servicios.</p>
                    <div class="row">
                      <div class="col-lg-6 mb-3">
                        <a 
                          href="#" 
                          class="btn btn-lg btn-block btn-outline-light"><span class="fa fa-plus pr-2"/>Leer más</a>
                      </div>
                      <div class="col-lg-6 mb-3">
                        <a 
                          href="#" 
                          class="btn btn-lg btn-block btn-outline-light"><span class="fa fa-check pr-2"/>Contratar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    <div 
      id="carousel-two" 
      class="carousel carousel-fade carousel-two slide w-100 d-none d-lg-block"
      data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item carousel-two-item-one active">
          <div class="card-deck">
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://www.apache.org" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--apache embed-responsive-item"/>
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://secure.php.net" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--php embed-responsive-item"/>
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://javascript.com" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--javascript embed-responsive-item"/>
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://laravel.com" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--laravel embed-responsive-item"/>
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://vuejs.org" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--vue embed-responsive-item"/>
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://sass-lang.com" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--sass embed-responsive-item"/>
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://www.w3.org" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--html embed-responsive-item"/>
            </div>
            <div class="card embed-responsive embed-responsive-4by3">
              <a 
                href="https://nodejs.org" 
                target="_blank" 
                class="carousel-two__logo carousel-two__logo--nodejs embed-responsive-item"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
