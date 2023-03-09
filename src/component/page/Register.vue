<template>
  <div class="authorization">
    <div class="container">
      <form class="position-absolute top-50 start-50 translate-middle p-3 rounded border m-auto" style="width: 100%; max-width: 700px">
        <h2 class="fw-bold mb-3">Создать аккаунт</h2>
        <div class="row">
          <div class="col-4">
            <div class="input-group mb-2">
              <input id="name" type="text" class="form-control" placeholder="name">
            </div>
          </div>
          <div class="col-8">
            <div class="input-group mb-2">
              <input id="surname" type="text" class="form-control" placeholder="surname">
            </div>
          </div>
        </div>
        <div class="input-group mb-2">
          <input id="username" type="text" class="form-control" placeholder="username">
        </div>
        <div class="input-group mb-2">
          <input id="email" type="email" class="form-control" placeholder="email">
          <span class="d-flex justify-content-center align-items-center input-group-text" style="width: 35px">@</span>
        </div>
        <div class="input-group mb-2">
          <input id="phone" type="text" class="form-control" placeholder="phone">
          <span class="d-flex justify-content-center align-items-center input-group-text" style="width: 35px">+</span>
        </div>
        <div class="input-group mb-4">
          <input id="password" type="password" class="form-control" placeholder="password">
          <span class="d-flex justify-content-center align-items-center input-group-text" style="width: 35px">!</span>
        </div>
        <button type="button" class="btn btn-primary fw-semibold" id="buttonRegister">Далее</button>
      </form>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>