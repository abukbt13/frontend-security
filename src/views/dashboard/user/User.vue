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
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h2>Add case</h2>
            <form @submit.prevent="addCase">

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input type="text" class="form-control" v-model="title">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">description</label>
                <textarea class="form-control" id="" cols="5" ></textarea>
              </div>

              <div class="">
                <button type="submit" class="w-100 btn btn-primary btn-block">Add</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
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
  </div>
</div>
 <Footer />
</template>

<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";

</script>

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