<script setup>

import Header from "@/views/includes/Header.vue";

import axios from "axios";

import {auth} from "@/compossables/auth";
import {onMounted, ref} from "vue";
const {authUser,authHeader,base_url,storage} = auth()
const admins = ref([])
const getAdmin =async () => {
  const res = await axios.get(base_url.value+'admin/show',authHeader)
  admins.value = res.data.users
  // console.log(res)
}

onMounted(()=>{
  getAdmin()
})
</script>

<template>
  <Header />
  <table style="position:absolute;min-width: 100vh;max-width: 100vw;" class="table border table-hover table-bordered">
    <tr>
      <th class="border">#</th>
      <th class="border">Email</th>
      <th class="border">Created_At</th>
    </tr>
    <tr v-for="admin in admins" :key="admin">
      <td class="border">{{ admin.id }}</td>
      <td class="border">{{ admin.email }}</td>
      <td class="border">{{ admin.created_at }}</td>
      <td><button @click="secretKeyGen(cases.id)" data-bs-toggle="modal" data-bs-target="#secret" class="btn m-2 bg-primary btn-primary">View</button></td>
      <td><button @click="secretKeyGen(cases.id)" data-bs-toggle="modal" data-bs-target="#secret" class="btn m-2 bg-primary btn-primary">Check  operation</button></td>
    </tr>
  </table>
</template>



<style scoped>

</style>