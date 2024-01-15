
<script setup>

</script>

<template>
  <div style="background-color: rgb(100,170,255);" class="head-title d-flex justify-content-between align-items-center">
  <div class="d-flex  align-items-center">
    <i style="font-size: 34px; color: blue;" class="bi  bi-building-fill-lock"></i>
    <router-link to="/" class="text-uppercase text-white  text-decoration-none">TopGuard Cloud</router-link>
  </div>
    <div class="links">
      <router-link to="/login" class="mybtn text-white mx-2  text-uppercase text-decoration-none">Login</router-link>
      <router-link to="/dashboard/admin" class="mybtn text-white mx-2   text-uppercase text-decoration-none">Dashboard</router-link>
    </div>
  </div>
</template>


<style scoped>
.mybtn{
  padding: 1rem;
}
.mybtn:hover{
  background-color: blue;
  color: black;
}

</style>