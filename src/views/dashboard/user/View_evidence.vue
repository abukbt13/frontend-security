
<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import router from "@/router";
import axios from "axios";
import {auth} from "@/compossables/auth";
import Header from "@/views/includes/Header.vue";

const {base_url,authHeader} = auth()

const cases = ref([])
const route = useRoute()
const case_id = route.params.case_id
const secret_key = route.params.secret_key

const getSingleCases =async () => {
  const res = await axios.get(base_url.value+'case/single/'+case_id+'/'+secret_key)
  cases.value = res.data
  console.log(res)
}
onMounted(()=>{
  getSingleCases()
})
</script>
<template>
  <Header />
 <div class="bg-light">
   <h2>Case information</h2>
   <h5 class="text-uppercase text-secondary">Title</h5>
   <p class="text-primary">{{cases.title}}</p>
   <p class="text-uppercase text-info">Description</p>
   <p class="text-primary">{{cases.description}}</p>
 </div>

</template>


<style scoped>

</style>