

<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

import {auth} from "@/compossables/auth";
const {authUser,authHeader,base_url,storage} = auth()
const email = ref('')
const password = ref('')
const logs = ref([])

function clearFields(){
  email.value=''
  password.value=''
}

const createAdmin =async () => {

  const formData = new FormData();
  formData.append('email', email.value)
  formData.append('password', password.value)
  const res = await axios.post(base_url.value+'admin/create',formData,authHeader)
  if(res.status === 200) {
    if(res.data.status === 'success'){
      clearFields()
    }

  }

}

const getlogs = async () =>{
  const res = await axios.get(base_url.value+'log/show_logs',authHeader)
  logs.value = res.data.data
}

function  secretKeyGen($id){
  case_id.value=$id
}

onMounted(()=>{
    authUser()
  getlogs()
})
</script>

<template>
  <div class="head-section">
    <Header />
  </div>
  <div  class="mx-4">


      <div class="">


        <div class="modal fade" id="add_admin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5 text-primary" id="staticBackdropLabel">Create New Admin</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="createAdmin">

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email"  class="form-control" v-model="email">
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="password">
                  </div>
                  <div class="">
                    <button type="submit"  class="float-end  btn btn-primary btn-block">Create Admin</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>


    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-list-task"></i>
    </button>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <span class="">ADMIN DASHBOARD</span> <hr>
        <span class=""><i  style="color: seagreen;padding: 4px;"  class="bi bi-pen-fill"></i>Users</span>
        <li data-bs-toggle="modal" data-bs-target="#add_admin" class="list-unstyled text-primary"><i class="bi  bi-plus"></i>Add cryptanalyst</li>
        <router-link to="super_admin/show_admin"><i class="bi  bi-plus"></i> Show Cryptoanalyst</router-link>
        <hr>
      </div>
    </div>
        <table  class="table table-responsive border table-hover table-bordered">
          <tr>
            <th class="border">#</th>
            <th class="border">Title</th>
<!--            <th class="border">Details</th>-->
            <th class="border">Platform</th>
            <th class="border">Operation</th>
          </tr>
          <tr v-for="log in logs" :key="log">
            <td class="border">{{ log.id }}</td>
            <td class="border">{{ log.title }}</td>
<!--            <td class="border">{{ log.details }}</td>-->
            <td class="border">{{ log.platform }}</td>
            <td><button @click="secretKeyGen(cases.id)" data-bs-toggle="modal" data-bs-target="#secret" class="btn m-2 bg-primary btn-primary">View</button></td>
          </tr>
        </table>

  </div>

  <!-- Button trigger modal -->


  <!-- Modal -->
  <div class="modal fade" id="secret" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-body">
          <form @submit.prevent="getSingleCases">

            <div class="mb-3">
              <div class="d-flex justify-content-between">
                <label for="exampleFormControlInput1" class="form-label">ENTER SECRET KEY</label>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

              </div>
              <input type="text" class="form-control" v-model="secret">
            </div>
            <div class="">
              <button type="submit"  class="float-end me-5 btn btn-primary btn-block">CONTINUE</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
  <Footer />
</template>



<style scoped>
table{
  background-color: yellow;
  width: 35rem;
}

</style>