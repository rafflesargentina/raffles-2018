<template>
  <div class="row">
    <div class="col-12">
      <main class="card account__card shadow--two">
        <section class="account__card-body">
          <div class="account-header">
            <h3>APLICACIONES</h3>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import AuthorizedClients from "../../passport/AuthorizedClients"
import Clients from "../../passport/Clients"
import PersonalAccessTokens from "../../passport/PersonalAccessTokens"

export default {

    name: "Applications",
    components: {
        AuthorizedClients,
        Clients,
        PersonalAccessTokens
    },
}
</script>
