
<script setup>

import Header from "@/views/includes/Header.vue";
import {ref} from "vue";
document.title = "home";


</script>

<template>
  <div class="main bg-primary px-4">
    <Header />
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6  d-flex flex-column justify-content-center">
        <h2 class="text-center text-white">
          Your top software guard
        </h2>
        <p class="text-center text-white">
          Secure your data  and information here to ensure good runtime of your business or your individual sensitive  personal information. We keep your information safe here preventing your data from any loss or making sure they are confidential.
        </p>

        <div class="d-flex justify-content-center">
          <router-link to="register" class="btn btn-secondary">Get Started</router-link>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="video-container">
          <video class="video" src="public/video.mp4" controls></video>
        </div>
      </div>
    </div>
    <div class="intro text-center">
      At TopGuard Cloud, we strive to build novel software solutions to assist Criminal Investigations through efficient case management, enhanced investigative workflow and utilising digital forensic intelligence.
    </div>


<!--    features-->
    <div class="features">
      <h2 class="text-uppercase text-center">Features</h2>
      <div class="row  d-flex justify-content-center">

        <div class="col-sm-12 col-md-4 col-lg-4">
        <div class="d-flex justify-content-center align-items-center flex-column">
          <div class="icon d-flex justify-content-center align-items-center">
            <div class="">
              <i style="font-size: 33px;" class="bi bi-people"></i>
            </div>
          </div>
          <h2 class="text-center">Manage</h2>
          <p class="text-center">
            Manage your department's forensic caseload simply and easily using CASEY. Create, allocate, sort, search and prioritise cases with ease. Identify trends, monitor progress and improve departmental efficiency
          </p>
        </div>
        </div>

        <div class="col-sm-12 col-md-4 col-lg-4">
        <div class="d-flex justify-content-center align-items-center flex-column">
          <div class="icon d-flex justify-content-center align-items-center">
            <div class="">
              <i style="font-size: 33px;" class="bi bi-pen-fill"></i>
            </div>
          </div>
          <h2 class="text-center">Manage</h2>
          <p class="text-center">
            Manage your department's forensic caseload simply and easily using CASEY. Create, allocate, sort, search and prioritise cases with ease. Identify trends, monitor progress and improve departmental efficiency
          </p>
        </div>
        </div>

        <div class="col-sm-12 col-md-4 col-lg-4">
        <div class="d-flex justify-content-center align-items-center flex-column">
          <div class="icon d-flex justify-content-center align-items-center">
            <div class="">
              <i style="font-size: 33px;" class="bi bi-search"></i>
            </div>
          </div>
          <h2 class="text-center">Manage</h2>
          <p class="text-center">
            Manage your department's forensic caseload simply and easily using CASEY. Create, allocate, sort, search and prioritise cases with ease. Identify trends, monitor progress and improve departmental efficiency
          </p>
        </div>
        </div>

      </div>
    </div>
  </div>



</template>

<style scoped>
.icon{
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  border: 10px solid green;
}
.video {
  max-width: 100%;
  max-height: 100%;
}
.intro{
  background-color: #993dfc;
  padding: 10rem;
  font-size: 27px;
  height: 20rem;
  box-shadow: bisque;
}
@media (max-width: 604px) {
  .intro{
    background-color: #993dfc;
    padding: 2rem;
    font-size: 17px;
    height: 20rem;
    box-shadow: bisque;
  }
}
</style>