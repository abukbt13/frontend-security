
<script setup>

</script>

<template>
<div class="">
  <div class="head-title d-flex justify-content-between align-items-center bg-primary">
  <div class="d-flex ms-2 mt-1 align-items-center">
    <i style="font-size: 34px; color: red;" class="bi  bi-building-fill-lock"></i>
    <router-link to="/" class="text-uppercase text-white mt-2 text-decoration-none">TopGuard Cloud</router-link>
  </div>
    <div class="links">
      <router-link to="login" class="text-white mx-2  text-uppercase text-decoration-none">Login</router-link>
      <router-link to="register" class="text-white mx-2  text-uppercase text-decoration-none">register</router-link>
      <router-link to="dashboard/user" class="text-white mx-2   text-uppercase text-decoration-none">Dashboard</router-link>

    </div>
  </div>
</div>
</template>


<style scoped>

</style>