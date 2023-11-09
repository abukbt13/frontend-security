

<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

import {auth} from "@/compossables/auth";
import router from "@/router";
const {base_url,authHeader} = auth()

const edit_id = ref('')
const case_state = ref('')

const case_date = ref([])
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




const editCase = ($cases) =>{
  edit_id.value =$cases.id
  defendant_name.value=$cases.defendant_name
  defendant_id.value=$cases.defendant_id
  case_name.value=$cases.case_name
  plaintiff_name.value=$cases.plaintiff_name
  plaintiff_id.value=$cases.plaintiff_id
  type_of_case.value=$cases.type_of_case

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
}
const addCase =async () => {

  const formData = new FormData();
  formData.append('case_name', case_name.value)
  formData.append('plaintiff_id', plaintiff_id.value)
  formData.append('plaintiff_name', plaintiff_name.value)
  formData.append('defendant_id', defendant_id.value)
  formData.append('defendant_name', defendant_name.value)
  formData.append('type_of_case', type_of_case.value)
  formData.append('key', key.value)
  if(edit_id.value!=''){
    const res = await axios.post(base_url.value+'court/edit/'+edit_id.value,formData)
    if(res.status === 200) {
      if(res.data.status === 'success'){
        alert('Successfully Update')
        clearFields()
        await getCases()
      }

    }
  }
  else {
    const res = await axios.post(base_url.value+'court/create',formData)
    if(res.status === 200) {
      if(res.data.status === 'success'){
        alert('Successfully saved')
        clearFields()
        await getCases()
      }

    }
  }



}
const getCases = async () =>{
  const res = await axios.get(base_url.value+'court/show')
  case_date.value = res.data.cases
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
const getSingleCases =async () => {
  await router.push('/dashboard/super_admin/case_details/' + case_id.value + '/' + secret.value)
  const res = await axios.get(base_url.value+'case/single/'+case_id.value+'/'+secret.value)
  console.log(res)
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
    <li data-bs-toggle="modal" data-bs-target="#add_case" @click="clearFields" class="list-unstyled text-primary"><i class="bi  bi-plus"></i>Add Case</li>
    <li class="list-unstyled text-primary"><i class="bi bi-plus"></i>View Cases</li>
    <li class="list-unstyled text-primary"><i class="bi bi-plus"></i>{{ add_success }}</li>
    <hr>


    <!-- Button trigger modal -->


    <!-- Modal -->
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
                <label for="exampleFormControlInput1" class="form-label">Secret Key</label>
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
              <div class="">
                <button v-if="edit_id" type="submit" data-bs-dismiss="modal" class="float-end  btn btn-primary btn-block">Update</button>
                <button v-else type="submit" data-bs-dismiss="modal" class="float-end  btn btn-primary btn-block">Add</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>


  </div>

  <div class="">

    <table class="table m-2 border table-hover table-bordered table-responsive">
      <tr>
        <th colspan="3" class="text-center">CASES</th>
      </tr>
      <tr>
        <th class="border">#</th>
        <th class="border">case Name</th>
        <th class="border">Plaintiff</th>
        <th class="border">Defendant</th>
        <th class="border">Operations</th>
      </tr>
        <tr v-for="cases in case_date" :key="cases">
          <td class="border">{{ cases.id }}</td>
          <td class="border">{{ cases.case_name }}</td>
          <td class="border">{{ cases.plaintiff_name }}</td>
          <td class="border">{{ cases.defendant_name }}</td>
          <td>
           <button class="btn m-2 bg-primary" @click="editCase(cases)"  data-bs-toggle="modal" data-bs-target="#add_case">Edit</button>
           <button class="btn m-2 bg-primary" @click="changeStatus(cases.id)" data-bs-toggle="modal" data-bs-target="#status">Update status</button>
           <button class="btn m-2 bg-primary" @click="secretKeyGen(cases.id)" data-bs-toggle="modal" data-bs-target="#secret">More details</button>
          </td>
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