

<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

import {auth} from "@/compossables/auth";
import router from "@/router";
const {base_url,authHeader} = auth()

const description = ref('')
const title = ref('')
const case_date = ref([])
const case_id = ref('')
const secret = ref('')
const key = ref('')

function clearFields(){
  title.value=''
  description.value=''
}
const addCase =async () => {

  const formData = new FormData();
  formData.append('title', title.value)
  formData.append('key', key.value)
  formData.append('description', description.value)
  const res = await axios.post(base_url.value+'case/create',formData)
  if(res.status === 200) {
    if(res.data.status === 'success'){
      alert('Successfully saved')
      clearFields()
    }

  }

}
const getCases = async () =>{
  const res = await axios.get(base_url.value+'case/show')
  case_date.value = res.data.cases
}

function  secretKeyGen($id){
  case_id.value=$id
}
const getSingleCases =async () => {
  router.push('/dashboard/user/view_evidence/'+case_id.value+'/'+secret.value)
  // const res = await axios.get(base_url.value+'case/single/'+case_id.value+'/'+secret.value)
  // console.log(res)
}
onMounted(()=>{
  getCases()
})
</script>

<template>
  <div class="head-section">
    <Header />
  </div>
<div class="d-flex ">
  <div class="px-5 bg-light py-4">
    <span class=""><i  class="bi bi-grid"></i>DASHBOARD</span> <hr>
    <span class=""><i  style="color: seagreen;padding: 4px;"  class="bi bi-pen-fill"></i>CASES</span>
    <li data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="list-unstyled text-primary"><i class="bi  bi-plus"></i>Add Case</li>
    <li class="list-unstyled text-primary"><i class="bi bi-plus"></i>View Cases</li>
    <hr>

    <span class="pt-2"><i style="color: seagreen;padding: 4px;" class="bi bi-grid-fill"></i>CATEGORY</span>
    <li class="list-unstyled text-primary"><i class="bi bi-plus"></i>Murder</li>
    <li class="list-unstyled text-primary"><i class="bi bi-plus"></i>Theft</li>
    <li class="list-unstyled text-primary"><i class="bi bi-plus"></i>Robbery</li>
    <hr>
    <span class="pt-2"><i style="color: seagreen;padding: 4px;"  class="bi bi-journal-bookmark-fill"></i>PAGES</span>
    <li class="list-unstyled text-primary"><i class="bi bi-plus"></i>F.A.Q</li>
    <li class="list-unstyled text-primary"><i class="bi bi-plus"></i>Profile</li>
    <li class="list-unstyled text-primary"><i class="bi bi-plus"></i>Robbery</li>
    <!-- Button trigger modal -->


    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Add A case</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addCase">

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Secret Key</label>
                <input type="text" class="form-control" v-model="key">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input type="text" class="form-control" v-model="title">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">description</label>
                <textarea class="form-control" id="" v-model="description" cols="5" ></textarea>
              </div>

              <div class="">
                <button type="submit"  class="float-end me-5 btn btn-primary btn-block">Add</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="">
    <div class="content m-3 bg-light">
      <span>Cases</span><i class="bi float-end bi-three-dots"></i>
     <div class="d-flex">
       <div  class="content-in d-flex justify-content-center align-items-center">
         <div class="">
           <i class="bi bi-basket-fill"></i>
         </div>
       </div>
       <div class="">
         <span>145</span><br>
         <span>12% decrease</span>
       </div>
     </div>
    </div>

    <table class="table border table-hover table-bordered">
      <tr>
        <th class="border">#</th>
        <th class="border">Title</th>
        <th class="border">Operations</th>
      </tr>
        <tr v-for="cases in case_date" :key="cases">
          <td class="border">{{ cases.id }}</td>
          <td class="border">{{ cases.title }}</td>
          <td><button @click="secretKeyGen(cases.id)" data-bs-toggle="modal" data-bs-target="#secret" class="btn m-2 bg-primary btn-primary">View</button></td>
        </tr>
    </table>
  </div>
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
.content{
  padding: 4px;
  border: 1px solid grey;
  width: 15rem;
}
.content-in{
  padding: 4px;
  border: 1px solid grey;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
</style>