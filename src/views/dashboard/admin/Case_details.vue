
<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";

</script>

<template>
<Header />
  <div class="row m-3">
    <div class="col">
      <h1>Case Evidences</h1>
     <h3 class="text-primary">Case Description</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ea, laboriosam nobis quaerat sequi sit sunt. Accusamus accusantium amet aspernatur at commodi consequatur debitis distinctio dolore doloremque ea, eius error esse et eveniet id, illum incidunt inventore, itaque iusto laborum libero modi odit perspiciatis porro ratione recusandae repellat repudiandae sint sit tempora temporibus ullam vero voluptatem! Accusamus aspernatur incidunt libero porro quasi. Ab accusantium commodi consequuntur ea, eos esse illo labore mollitia natus neque nobis nulla qui saepe soluta temporibus. Ab aspernatur aut cumque, dignissimos dolorem earum, fugit
        incidunt Cumque illum nobis quam?</p>
      <button class="btn btn-outline-primary">
        <i class="bi bi-pen-fill">Edit description</i>
      </button>
    </div>
    <div class="col">
        <h2>Saved Evidences</h2>
     <p>Videos</p>
      <ul>
        <li>Stolen car</li>
        <li>Stolen car</li>
      </ul>
      <p>Pictures</p>
      <ul>
        <li>Stolen car</li>
        <li>Stolen car</li>
      </ul>
      <p>Documents</p>
      <ul>
        <li>Stolen car</li>
        <li>Stolen car</li>
      </ul>
      <p>Recordings</p>
      <ul>
        <li>Stolen car</li>
        <li>Stolen car</li>
      </ul>
    </div>
  </div>

  <Footer />
</template>


<style scoped>

</style>