
<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import axios from "axios";
import {useRoute} from "vue-router";
import {auth} from "@/compossables/auth";
import {ref} from "vue";

const {authUser,authHeader,base_url,storage} = auth()
const enter_secret = ref(true);
const message = ref('');
const secret = ref('');
const view = ref('');
const evidences = ref([]);
const route   =useRoute()
const case_id = route.params.case_id

const  getSingleCases = async () => {
  const res = await axios.get(base_url.value + 'case/single/' + case_id + '/' + secret.value, authHeader)
  if(res.status=== 200) {
    if (res.data.status === 'failed') {

      enter_secret.value = true
      message.value = "res.data.message"
    }
    else {
      view.value = 'true'
      evidences.value =res.data.data
      enter_secret.value = false
    }
  }
  else {
    alert('error in network')
  }
}
</script>

<template>
<Header />

<div v-show="enter_secret">
  <div  class="d-flex justify-content-center">
    <div style="width: 30rem;" class="border p-3 m-2">
      <form @submit.prevent="getSingleCases">

        <div class="mb-3">
          <div class="d-flex flex-column ">
            <h4 v-if="message" class="error text-warning">Please the correct secret Key?</h4>
            <label for="exampleFormControlInput1" class="form-label">ENTER SECRET KEY OPEN FILES</label>

          </div>
          <input type="text" class="form-control" v-model="secret">
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit"  class=" me-5 btn btn-primary btn-block">CONTINUE</button>
        </div>
      </form>
    </div>
  </div>
</div>
  <div v-if="view" class="row m-3">
    <div  class="col col-sm-12 col-md-6 col-lg-6">
     <h3 class="text-primary">Case Description</h3>
      <textarea class="form-control"   rows="5">{{evidences.description}}</textarea>


      <button class="btn btn-outline-primary">
        <i class="bi bi-pen-fill">Edit description</i>
      </button>
    </div>
    <div class="col col-sm-12 col-md-6 col-lg-6">
        <h2>Saved Evidences</h2>
     <p>Videos Evidences</p>
      <table class="table table-bordered border">
            <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>
            <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td><button class="btn btn-primary">View</button></td>
        </tr>
        </tbody>
      </table>
      <hr>

      <p>Pictures Evidences</p>
      <table class="table table-bordered border">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td><button class="btn btn-primary">View</button></td>
        </tr>
        </tbody>
      </table>
      <hr>
      <p>Documents</p>
      <table class="table table-bordered border">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td><button class="btn btn-primary">View</button></td>
        </tr>
        </tbody>
      </table>
      <hr>
      <p>Recordings</p>
      <table class="table table-bordered border">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td><button class="btn btn-primary">View</button></td>
        </tr>
        </tbody>
      </table>
      <hr>
    </div>
  </div>

  <Footer />
</template>


<style scoped>

</style>