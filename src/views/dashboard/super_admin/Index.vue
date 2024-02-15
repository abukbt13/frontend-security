

<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

document.title='dashboard'
import {auth} from "@/compossables/auth";
const {authUser,authHeader,base_url,storage} = auth()
const email = ref('')
const name = ref('')
const password = ref('')
const logs = ref([])
const admins = ref([])
const cases = ref([])
const edit =ref(true)
const status =ref('')
const user_id =ref('')

function clearFields(){
  name.value = ''
  email.value=''
  password.value=''
}

const createAdmin =async () => {

  const formData = new FormData();
  formData.append('email', email.value)
  formData.append('name', name.value)
  formData.append('password', password.value)
  if(edit.value === true) {
    // alert('creating new')
    const res = await axios.post(base_url.value+'admin/create',formData,authHeader)
    if(res.status === 200) {
      if(res.data.status === 'success'){
        status.value='Admin successfully created'
        clearFields()
        getlogs()
        getAdmins()
        getCases()
      }
      else {
        status.value=res.data
      }
    }
  }
  else {
    // alert('editing')
    const res = await axios.post(`${base_url.value}admin/edit/${user_id.value}`, formData, authHeader);
    if(res.status === 200) {
      if(res.data.status === 'success'){
        status.value='Admin edited successfully'
        clearFields()
        getlogs()
        getAdmins()
        getCases()
      }
      else {
        status.value=res.data
      }
    }
  }

}

const getlogs = async () =>{
  const res = await axios.get(base_url.value+'log/show_logs',authHeader)
  logs.value = res.data.data
}

const getAdmins = async () =>{
  const res = await axios.get(base_url.value+'admin/show',authHeader)
  admins.value = res.data.users
}
const getCases = async () =>{
  const res = await axios.get(base_url.value+'admin/show_cases',authHeader)
  cases.value = res.data.cases
}

function  secretKeyGen($id){
  case_id.value=$id
}
const isSidebarOpen = ref(false)
function showSidebar(){
  isSidebarOpen.value = isSidebarOpen.value === false ? true : false
  // document.getElementById("sidebar")
}
function resetform(){
  edit.value = true
  email.value = ''
  name.value = ''
  password.value=''
}
function editAdmin($data){
  user_id.value = $data.id
  edit.value = false
  email.value = $data.email
  name.value = $data.name
}
onMounted(()=>{
  authUser()
  getlogs()
  getAdmins()
  getCases()
})
</script>

<template>
  <div class="head-section">
    <Header />
  </div>
  <div  class="">


      <div class="modal fade" id="add_admin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-primary" id="staticBackdropLabel">Create New Admin</h1>
              <button type="button" @click="resetform()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h2 class="bg-success">{{ status }}</h2>
              <form @submit.prevent="createAdmin">

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                  <input type="text"  class="form-control" v-model="name">
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email</label>
                  <input type="email"  class="form-control" v-model="email">
                </div>
                <div class="mb-3" v-show="edit">
                  <label for="exampleFormControlInput1" class="form-label">Password</label>
                  <input type="password" class="form-control" v-model="password">
                </div>
                <div class="">
                  <button type="submit" v-if="edit"  class="float-end  btn btn-primary btn-block">Create Admin</button>
                  <button type="submit"  v-else class="float-end  btn btn-primary btn-block">Update Admin</button>
              </div>
              </form>
            </div>

          </div>
        </div>
      </div>


      <div class="modal fade" id="view_logs" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-primary" id="staticBackdropLabel">All Logs</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <div class="ms-4 table-responsive">
                <table class="table table-responsive border table-hover table-bordered">
                  <!-- Table Header -->

                  <tr>
                    <td class="border">#</td>
                    <td class="border">Title</td>
                    <td class="border">Details</td>
                    <td class="border">Details</td>
                    <td class="border">Platform</td>
                    <td class="border">Operation</td>
                  </tr>

                  <!-- Table Rows (Generated dynamically using Vue.js) -->
                  <tr v-for="log in logs" :key="log">
                    <td class="border">{{ log.id }}</td>
                    <td class="border">{{ log.title }}</td>
                    <!-- <td class="border">{{ log.details }}</td> -->
                    <td class="border">{{ log.platform }}</td>
                    <td class="border">{{ log.platform }}</td>
                    <td class="border">{{ log.platform }}</td>
                    <td>
                      <button @click="secretKeyGen(cases.id)" data-bs-toggle="modal" data-bs-target="#secret" class="btn m-2 bg-primary btn-primary">View</button>
                    </td>
                  </tr>
                </table>
              </div>

            </div>

          </div>
        </div>
      </div>
      <div class="modal fade" id="case_file" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-primary" id="staticBackdropLabel">All Cases</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <div class="ms-4 table-responsive">
                <table class="table table-responsive border table-hover table-bordered">
                  <!-- Table Header -->

                  <tr>
                    <td class="border">#</td>
                    <td class="border">Defendant id</td>
                    <td class="border">defendant_name</td>
                    <td class="border">Plaintiff_name</td>
                    <td class="border">case_name</td>
                    <td class="border">Operation</td>
                  </tr>
                <tr v-for="cases in cases" :key="case">
                  <td class="border">{{ cases.id }}</td>
                  <td class="border">{{ cases.defendant_id }}</td>
                  <td class="border">{{ cases.defendant_name }}</td>
                  <td class="border">{{ cases.plaintiff_name }}</td>
                  <td class="border">{{ cases.case_name }}</td>
                  <td class="border"><button class="btn btn-sm bg-primary">More info</button></td>

                </tr>
                </table>
              </div>

            </div>

          </div>
        </div>
      </div>



    <div @click="isSidebarOpen = isSidebarOpen === false ? true : false" class="d-block d-md-none d-lg-none">
      <i style="font-size: 40px; color: blue;" class="bi bi-list-task"></i>
    </div>

  <div class="d-flex ps-3 pt-4">
    <div id="sidebar" class="sidebar d-md-block d-lg-block" :class="isSidebarOpen ? '':'d-none'">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="" id="offcanvasScrollingLabel">Dashboard</h5>
        <div @click="isSidebarOpen = isSidebarOpen === false ? true : false" class="d-block d-md-none d-lg-none">
          <i style="font-size: 40px; color: white;" class="bi bi-x-lg"></i>
        </div>
      </div>
      <div class="offcanvas-body">

        <li style="padding: 1rem;cursor: progress;font-size: 18px;" data-bs-toggle="modal" data-bs-target="#add_admin" class="mt-3 bg-primary list-unstyled "><i class="bi  bi-plus"></i>Add Forensic Analyst</li>
        <li style="padding: 1rem;cursor: progress;font-size: 18px;" data-bs-toggle="modal" data-bs-target="#view_logs" class="mt-3 bg-primary list-unstyled "><i class="bi  bi-eye-fill"></i>View Logs</li>
        <li style="padding: 1rem;cursor: progress;font-size: 18px;" data-bs-toggle="modal" data-bs-target="#case_file" class=" mt-3 bg-primary  text-decoration-none" to="super_admin/show_admin"><i class="bi  bi-eye-fill"></i> Show Cases files</li>
        <hr>
      </div>
    </div>
    <div class="ms-4 table-responsive">
      <table class="table table-responsive border table-hover table-bordered">
        <!-- Table Header -->
        <tr>
          <th colspan="4" class="text-uppercase text-center">All Admins</th>
        </tr>
        <tr>
          <td class="border">#</td>
          <td class="border">Email</td>
          <td class="border">Password</td>
          <td class="border">Operation</td>
        </tr>

        <!-- Table Rows (Generated dynamically using Vue.js) -->
        <tr v-for="admin in admins" :key="admin">
          <td class="border">{{ admin.id }}</td>
          <td class="border">{{ admin.email }}</td>
          <td class="border">{{ admin.name }}</td>
          <td class="border">
            <button data-bs-toggle="modal" data-bs-target="#add_admin"  @click="editAdmin(admin)" class="btn bg-primary">Edit</button>
          </td>
        </tr>
      </table>
    </div>
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

</template>



<style scoped>
table{
  width: 100%;
}
.sidebar{
  height: 100Vh;
  width: 18vw;
}
@media (min-width: 300px) and (max-width: 600px) {
  .sidebar{
    position: absolute;
    top: 3.3rem;
    left: 0rem;
    z-index: 1;
    background-color: rgb(100,170,255);;
    height: 100Vh;
    width: 50vw;
    border-right: 1px solid black;
  }
}
</style>