
<script setup>

import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import {ref} from "vue";
document.title = "home";

</script>

<template>
  <Header />
  <div class="main  px-4">

    <div class="row mt-3">
      <div class="col-sm-12 col-md-6 col-lg-6  d-flex flex-column justify-content-center">
        <h2 class="text-center  text-primary">
          Your top software guard
        </h2>
        <p class="text-center text-primary ">
          Secure your data  and information here to ensure good runtime of your business or your individual sensitive  personal information. We keep your information safe here preventing your data from any loss or making sure they are confidential.
        </p>

        <div class="d-flex justify-content-center">
          <router-link to="register" style="background-color: pink;color:blue;" class="btn">Get Started</router-link>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="video-container">
          <video class="video" src="public/video.mp4" controls></video>
        </div>
      </div>
    </div>
    <div class="intro bg-light text-center">
      At TopGuard Cloud, we strive to build novel software solutions to assist Criminal Investigations through <br> efficient case management, enhanced investigative workflow and utilising<br>  digital forensic intelligence.
    </div>


<!--    features-->
    <div class="features mx-3 my-2">
     <div class="mx-4 my-4">
       <h2 class="text-uppercase text-center">Features</h2>
     </div>
      <div class="row">

        <div class="col-sm-12 border me-2 mb-2 col-md-6 col-lg-6">
        <div class="d-flex align-items-center flex-column">
          <div class="icon d-flex justify-content-center align-items-center">
            <div class="">
              <i style="font-size: 33px;" class="bi bi-pen-fill"></i>
            </div>
          </div>
          <h2 class="text-center">Manage</h2>
          <p class="text-center">
            Manage your department's forensic caseload simply and easily using TopGuard.
            Create, allocate, sort, search and prioritise cases with ease. Identify trends,
            monitor progress and improve departmental efficiency by using our system
          </p>
        </div>
        </div>

        <div class="col-sm-12 border me-2 mb-2 col-md-5 col-lg-5">
        <div class="d-flex  align-items-center flex-column">
          <div class="icon d-flex justify-content-center align-items-center">
            <div class="">
              <i style="font-size: 33px;" class="bi bi-search"></i>
            </div>
          </div>
          <h2 class="text-center">Secure</h2>
          <p class="text-center">
            Create a strong password and frequently manages changes to the password.
            Gives you the option of two way sign in using OTP for verification in the authentication
          </p>
        </div>
        </div>

      </div>
    </div>
  </div>
<Footer />


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
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  height: 20rem;
}
@media (max-width: 604px) {
  .intro{
    font-size: 17px;
    height: 16rem;
  }
}
</style>