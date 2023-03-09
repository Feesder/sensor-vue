<template>
  <div class="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem('token')) {
      this.$store.dispatch('checkAuth')
    }
  }
}
</script>

<style>

</style>
