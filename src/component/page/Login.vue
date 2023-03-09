<template>
  <div>
    <div class="authorization">
      <div class="container">
        <form @submit="onSubmit" class="position-absolute top-50 start-50 translate-middle p-3 rounded border m-auto" style="width: 100%; max-width: 700px">
          <h2 class="fw-bold mb-3">Вход</h2>
          <div class="input-group mb-2">
            <input type="text" class="form-control" placeholder="username" v-model="user">
          </div>
          <div class="input-group mb-4">
            <input type="password" class="form-control" placeholder="password" v-model="password">
            <span class="d-flex justify-content-center align-items-center input-group-text" style="width: 35px">!</span>
          </div>
          <div class="d-flex justify-content-between" style="width: 100%">
            <router-link to="/register" class="btn btn-outline-primary me-2 fw-semibold">Авторизация</router-link>
            <button type="button" class="btn btn-primary fw-semibold" name="buttonLogin" v-on:click="login">Далее</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import router from "@/router/router";

  export default {
    name: 'Login',
    data() {
      return {
        user: '',
        password: ''
      }
    },
    methods: {
      async login() {
        this.$store.dispatch('onLogin', {
          login: this.user,
          password: this.password
        })
      }
    }
  }
</script>

<style>

</style>