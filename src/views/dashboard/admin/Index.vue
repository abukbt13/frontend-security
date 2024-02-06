

<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import Swal from 'sweetalert2'
import {auth} from "@/compossables/auth";
import router from "@/router";
const {base_url,authUser,authHeader} = auth()

const edit_id = ref('')
const case_state = ref('')

const case_date = ref([])
const deactivated_case = ref([])
const case_id = ref('')
const secret = ref('')
const key = ref('')

const defendant_name = ref('')
const defendant_id = ref('')
const case_name = ref('')

const plaintiff_name = ref('')
const plaintiff_id = ref('')
const type_of_case = ref('')
const case_status_id = ref('')
const status_type = ref('')
const description = ref('')




const editCase = ($cases) =>{
  edit_id.value =$cases.id
  defendant_name.value=$cases.defendant_name
  defendant_id.value=$cases.defendant_id
  case_name.value=$cases.case_name
  plaintiff_name.value=$cases.plaintiff_name
  plaintiff_id.value=$cases.plaintiff_id
  type_of_case.value=$cases.type_of_case
  description.value=$cases.description

}
function clearFields(){
  edit_id.value=''
  plaintiff_id.value=''
  key.value=''
  plaintiff_name.value=''
  defendant_id.value=''
  defendant_name.value=''
  case_name.value=''
  type_of_case.value=''
  description.value=''
}
const addCase =async () => {

  const formData = new FormData();
  formData.append('case_name', case_name.value)
  formData.append('plaintiff_id', plaintiff_id.value)
  formData.append('plaintiff_name', plaintiff_name.value)
  formData.append('defendant_id', defendant_id.value)
  formData.append('defendant_name', defendant_name.value)
  formData.append('type_of_case', type_of_case.value)
  formData.append('description', description.value)
  formData.append('key', key.value)

    const res = await axios.post(base_url.value+'court/create',formData,authHeader)
    if(res.status === 200) {
      if(res.data.status === 'success'){
        clearFields()
        await getCases()
        await  Swal.fire(
            'Success!',
            'successfully added case',
            'success'
        )
      }

    }

}
const getCases = async () =>{
  const res = await axios.get(base_url.value+'court/show',authHeader)
  case_date.value = res.data.cases
}
const getdeactivatedCases = async () =>{
  const res = await axios.get(base_url.value+'court/show_deactivated',authHeader)
  deactivated_case.value = res.data.cases
}
const changeStatus = async ($case_id) =>{
  case_status_id.value = $case_id
  const res = await axios.get(base_url.value+'court/status'+$case_id)
  alert('successfully updated')
}
const changeCaseStatus =async () => {

  const formData = new FormData();
  formData.append('status', status_type.value)
  const res = await axios.post(base_url.value+'court/status/'+case_status_id.value,formData,authHeader)
  if(res){
    alert('successfully updated')
  }
}

function  secretKeyGen($id){
  case_id.value=$id
}
function showSidebar(){
  const sidebar=document.getElementById('sidebar')
  sidebar.classList.toggle('d-none')
}
function deactivateCAse(id){
  Swal.fire({
    title: "Are you sure you want to  deactivating case?",
    text: "You won't be able to revert this!",
    icon: "danger",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Deactivate it!"
  }).then((result) => {
    if (result.isConfirmed) {
      const res =  axios.get(`${base_url.value}court/deactivate/${id}`, authHeader);      Swal.fire({
        title: "Deactivated!",
        text: "Case have been deactivated.",
        icon: "success"
      });
      getCases()
    }
  });
}

function activateCAse(id){
  Swal.fire({
    title: "Are you sure you want to  activating case?",
    text: "You won't be able to revert this!",
    icon: "danger",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, activate it!"
  }).then((result) => {
    if (result.isConfirmed) {
      const res =  axios.get(`${base_url.value}court/activate/${id}`, authHeader);      Swal.fire({
        title: "Activated!",
        text: "Case have been activated.",
        icon: "success"
      });
      getCases()
    }
  });
}

onMounted(()=>{
  getCases()
  authUser()
  getdeactivatedCases()
})
</script>

<template>
  <div class="head-section">
    <Header />
  </div>

  <i style="font-size: 30px; color: blue;" @click="showSidebar()" class="bi  bi-list d-block d-md-none d-lg-none"></i>
  <div class="d-flex">
    <div id="sidebar" class="sidebar d-none d-md-block d-lg-block px-4 pt-4">
      <h2  class="text-uppercase text-primary"><i  class="bi bi-grid"></i>Dashboard</h2>
      <h5 class="">CASES</h5>
      <li style="font-size: 24px;" class=" my-1 text-primary list-unstyled" data-bs-toggle="modal" data-bs-target="#add_case" ><i class="bi  bi-activity"></i>Add Case</li>
      <li style="font-size: 24px;" class=" my-1 list-unstyled text-primary" data-bs-toggle="modal" data-bs-target="#inactiveCases" @click="clearFields" ><i class="bi  bi-activity"></i>Inactive Cases</li>
    </div>

    <!-- Modal for adding a case -->
    <div class="modal fade" id="add_case" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 v-if="edit_id" class="modal-title text-primary fs-5" id="staticBackdropLabel">Edit case</h1>
            <h1 v-else class="modal-title text-primary fs-5" id="staticBackdropLabel">Add Case</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addCase">

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Secret Key</label>
                <input type="text" class="form-control" v-model="key">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Case</label>
                <input type="text" class="form-control" v-model="case_name">
              </div>
              <div class="row">

                <div class="col">
                  <div class="mb-3">
                    <p class="text-primary">Plaintiff details</p>
                    <label for="">Full Name</label>
                    <input type="text" class="form-control" v-model="plaintiff_name">
                    <label for="">Id Number</label>
                    <input type="number" class="form-control" v-model="plaintiff_id">
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <p class="text-primary">Defendant details</p>
                    <label for="">Full Name</label>
                    <input type="text" class="form-control" v-model="defendant_name">
                    <label for="">Id Number</label>
                    <input type="number" class="form-control" v-model="defendant_id">
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Type of Case</label>
                <input type="text" class="form-control" v-model="type_of_case">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Description</label>
                <input type="text" class="form-control" v-model="description">
              </div>
              <div class="">
                <button v-if="edit_id" type="submit" data-bs-dismiss="modal" class="float-end  btn btn-primary btn-block">Update</button>
                <button v-else type="submit" data-bs-dismiss="modal" class="float-end  btn btn-primary btn-block">Add</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
    <!--end of modal-->
    <!-- Modal for adding a case -->
    <div class="modal fade" id="inactiveCases" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 v-if="edit_id" class="modal-title text-primary fs-5" id="staticBackdropLabel">Edit case</h1>
            <h1 v-else class="modal-title text-primary fs-5" id="staticBackdropLabel">Inactive cases details</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="ps-3 table-responsive">
              <div class="ms-4 table-responsive">
                <table class="table table-responsive border table-hover table-bordered">
                  <!-- Table Header -->
                  <tr>
                    <th colspan="4" class="text-uppercase text-center">All cases</th>
                  </tr>
                  <tr>
                    <td class="border">#</td>
                    <td class="border">key</td>
                    <td class="border">case Name</td>
                    <td class="border">Plaintiff</td>
                    <td class="border">Defendant</td>
                    <td class="border">Defendant</td>
                  </tr>

                  <!-- Table Rows (Generated dynamically using Vue.js) -->
                  <tr  v-for="deactivated_case in deactivated_case" :key="deactivated_case">
                    <td class="border">{{ deactivated_case.id }}</td>
                    <td class="border">{{ deactivated_case.key }}</td>
                    <td class="border">{{ deactivated_case.case_name }}</td>
                    <td class="border">{{ deactivated_case.plaintiff_name }}</td>
                    <td class="border">{{ deactivated_case.defendant_name }}</td>
                    <td >
                      <button class="btn bg-secondary" @click="activateCAse(deactivated_case.id)">Activate</button>
                      <router-link :to="`/dashboard/admin/case_details/${deactivated_case.id}/${deactivated_case.key}`" class="btn m-2 bg-primary">More details</router-link>
                    </td>
                  </tr>
                </table>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <!--end of modal-->

    <!--table for showing individual cases-->
    <div class="ps-3 table-responsive">
      <div class="ms-4 table-responsive">
        <table class="table table-responsive border table-hover table-bordered">
          <!-- Table Header -->
          <tr>
            <th colspan="4" class="text-uppercase text-center">All cases</th>
          </tr>
          <tr class="bg-secondary text-white text-center text-uppercase">
            <td class="border">#</td>
            <td class="border">case Name</td>
            <td class="border">Plaintiff</td>
            <td class="border">Defendant</td>
            <td class="border">Operations</td>
          </tr>

          <!-- Table Rows (Generated dynamically using Vue.js) -->
          <tr  v-for="cases in case_date" :key="cases">
            <td class="border">{{ cases.id }}</td>
            <td class="border">{{ cases.case_name }}</td>
            <td class="border">{{ cases.plaintiff_name }}</td>
            <td class="border">{{ cases.defendant_name }}</td>
            <td >
              <button class="btn bg-secondary" @click="deactivateCAse(cases.id)">Deactivate</button>
              <router-link :to="`/dashboard/admin/case_details/${cases.id}/${cases.key}`" class="btn m-2 bg-primary">More details</router-link>
            </td>
          </tr>
        </table>
      </div>

    </div>
  </div>
  <!-- end of table showing cases -->


  <!-- Modal -->
  <div class="modal fade" id="status" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">


    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-body">
          <form @submit.prevent="changeCaseStatus">

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Change Status</label><br>
              <select v-model="status_type">
                <option value="closed">Closed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div class="">
              <button type="submit" data-bs-toggle="modal" class="float-end me-5 btn btn-primary btn-block">Confirm </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>

</template>



<style scoped>
li:hover{
  background-color: aqua;
  cursor: pointer;
}
.sidebar{
  height: 100Vh;
  border-right: 1px solid black;
}
@media (min-width: 300px) and (max-width: 600px) {
  .sidebar{
    position: absolute;
    top: 1rem;
    left: 4px;
    z-index: 1;
    background-color: rgb(100,170,255);;
    height: 100Vh;
    border-right: 1px solid black;
  }
}
</style>