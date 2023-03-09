<template>
  <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
      <a href="@{/}" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none fw-bold fs-3">
        SL#20
      </a>

      <div class="col-md-3 text-end">
        <div v-if="!$store.state.credentials.isLoading">
          <router-link v-if="$store.state.credentials.user" to="/login" class="btn btn-outline-primary me-2 fw-semibold">Профиль</router-link>
          <router-link v-else to="/login" class="btn btn-outline-primary me-2 fw-semibold">Войти</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style>

</style>