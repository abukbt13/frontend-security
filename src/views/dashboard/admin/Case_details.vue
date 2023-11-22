
<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import axios from "axios";
import {useRoute} from "vue-router";
import {auth} from "@/compossables/auth";
import {onMounted, ref} from "vue";

const {authUser,authHeader,base_url,storage} = auth()
const enter_secret = ref(true);
const message = ref('');
const secret = ref('');
const view = ref('');

const picture = ref('');
const description = ref('');
const document = ref('');
const all_pictures = ref([]);
const all_docs = ref([]);
const all_videos = ref([]);

const evidences = ref([]);

const route   =useRoute()
const case_id = route.params.case_id

function pictureUpload(e){
  picture.value=e.target.files[0];
}


const  getPicture = async () => {
  const res = await axios.get(base_url.value + 'evidence/picture/show', authHeader)
  if(res){
    all_pictures.value = res.data.picture
  }

}
const addPicture =async () => {
  const formData = new FormData();
  formData.append('picture', picture.value)
  formData.append('description', description.value)

  const res = await axios.post(base_url.value+'evidence/picture/add',formData,authHeader)
  if(res.status === 200) {
    alert('success')
  }
  // if(res.data.status === 'success'){
  //   alert('Successfully Update')
  //   clearFields()
  //   await getCases()
  // }


}

const video = ref('')
function videoUpload(e){
  video.value=e.target.files[0];
}
const addVideo =async () => {
  const formData = new FormData();
  formData.append('video', video.value)
  formData.append('description', description.value)

  const res = await axios.post(base_url.value+'video/add',formData,authHeader)
  if(res.status === 200) {
    alert('success')
  }
}
const  getVideo = async () => {
  const res = await axios.get(base_url.value + 'video/show', authHeader)
  if(res){
    all_videos.value = res.data.videos
  }

}
const  getSingleCases = async () => {
  const res = await axios.get(base_url.value + 'case/single/' + case_id + '/' + secret.value, authHeader)
  if(res.status=== 200) {
    if (res.data.status === 'failed') {

      enter_secret.value = true
      message.value = "res.data.message"
    }
    else {
      await getPicture()
      await getDocument()
      await getVideo()

      view.value = 'true'
      evidences.value =res.data.data
      enter_secret.value = false
    }
  }
  else {
    alert('error in network')
  }
}



function documentUpload(e){
  document.value=e.target.files[0];
}
const addDocument =async () => {
  alert('')
  const formData = new FormData();
  formData.append('document', document.value)
  formData.append('description', description.value)

  const res = await axios.post(base_url.value+'document/add',formData,authHeader)
  if(res.status === 200) {
    alert('success')
  }
  // if(res.data.status === 'success'){
  //   alert('Successfully Update')
  //   clearFields()
  //   await getCases()
  // }


}
const  getDocument = async () => {
  const res = await axios.get(base_url.value + 'document/show', authHeader)
  if(res){
    all_docs.value = res.data.documents
  }

}

onMounted(()=>{
  authUser()
})

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
  <div v-if="view" class="view m-3">
<!--    description-->
    <div  class="description">
     <h3 class="text-primary">Case Description</h3>
      <textarea class="form-control"   rows="5">{{evidences.description}}</textarea>
      <button class="btn  mt-2 btn-outline-primary"  data-bs-toggle="modal" data-bs-target="#editDescription">
        <i style="color: green;" class="bi bi-pen-fill"></i>Edit description
      </button>

      <div class="modal fade" id="editDescription" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit description of the case</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <textarea class="form-control"   rows="5">{{evidences.description}}</textarea>

              <button type="button" class="btn btn-primary float-end mt-3">Save changes</button>

            </div>

          </div>
        </div>
      </div>
    </div>

    <!--    videos-->
      <div class="vid"><h2>Saved Evidences</h2>
        <p>Video Evidences</p>
        <table class="table table-bordered border">
          <thead>
          <tr>
            <th colspan="4">Video evidence
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#addVideo">
                Add Video evidence
              </button>

              <!-- Modal -->
            </th>
          </tr>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Picture</th>
            <th scope="col">Description</th>
            <th scope="col">Operation</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="videos in all_videos" :key="videos">
            <td>{{videos.id}}</td>
            <td>{{videos.video}}</td>
            <td>{{videos.description}}</td>
            <td><button class="btn btn-primary">View</button></td>
          </tr>

          </tbody>
        </table>

        <div class="modal fade" id="addVideo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add Video evidence</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form @submit.prevent="addVideo">
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Description</label>
                    <textarea v-model="description" class="form-control" rows="5"></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Picture</label>
                    <input type="file" @change="videoUpload" class="form-control" >
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Add Video</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    <!--    pictures-->
      <div class="pic">
        <p>Picture Evidences</p>
        <table class="table table-bordered border">
          <thead>
          <tr>
            <th colspan="4">Picture evidence
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#addpicture">
                Add picture evidence
              </button>

              <!-- Modal -->
            </th>
          </tr>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Picture</th>
            <th scope="col">Description</th>
            <th scope="col">Operation</th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="all_pictures" v-for="pics in all_pictures" :key="pics">
            <td>{{pics.id}}</td>
            <td>{{pics.picture}}</td>
            <td>{{pics.description}}</td>
            <td><button class="btn btn-primary">View</button></td>
          </tr>
          <tr v-else>
            <th colspan="4"><h1>No pictures saved</h1></th>
          </tr>
          </tbody>
        </table>
        <div class="modal fade" id="addpicture" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add Picture evidence</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form @submit.prevent="addPicture">
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Description</label>
                    <textarea v-model="description" class="form-control" rows="5"></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Picture</label>
                    <input type="file" @change="pictureUpload" class="form-control" >
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Add Evidence</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    <!--    Documents-->
       <div class="doc">
        <p>Document Evidences</p>
        <table class="table table-bordered border">
          <thead>
          <tr>
            <th colspan="4">Document evidence
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#addDocument">
                Add document evidence
              </button>

              <!-- Modal -->
            </th>
          </tr>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Document</th>
            <th scope="col">Description</th>
            <th scope="col">Operation</th>
          </tr>
          </thead>
          <tbody>
          <tr  v-for="docs in all_docs" :key="docs">
            <td>{{docs.id}}</td>
            <td>{{docs.document}}</td>
            <td>{{docs.description}}</td>
            <td><button class="btn btn-primary">View</button></td>
          </tr>

          </tbody>
        </table>

        <div class="modal fade" id="addDocument" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add documents evidence</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form @submit.prevent="addDocument">
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Description</label>
                    <textarea v-model="description" class="form-control" rows="5"></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Document</label>
                    <input type="file" @change="documentUpload" class="form-control" >
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Add Document</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>


  <Footer />
</template>


<style scoped>
.view{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.doc ,.pic ,.vid ,.description{
  padding: 1rem;
  overflow: scroll;
  position: relative;
  margin: 2px;
  border: 2px solid pink;
  height: 20rem;
}
@media (min-width: 300px) and (max-width: 780px) {
  .view{
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>