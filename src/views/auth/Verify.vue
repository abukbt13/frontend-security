
<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute, useRouter} from "vue-router";
const router = useRouter()
const route = useRoute();

const otp = ref('')
const id = ref('')
 id.value = route.params.id;
const status = ref('')

import {auth} from "@/compossables/auth";
import Header from "@/views/includes/Header.vue";
const {base_url,authHeader} = auth()



const Verify =async () => {
  if(otp.value==''){
    status.value = 'Otp is required'
  }
  const formData = new FormData();
  formData.append('id', id.value)
  formData.append('otp', otp.value)
  const res = await axios.post(base_url.value+'auth/verify/'+id.value,formData)
  if(res.status=== 200) {
    if (res.data.status === 'success') {
      if(res.data.user.role === 'super_admin'){
        await router.push('/dashboard/super_admin/');
      }
      else{
        console.log(res.data.user.role)
        await router.push('/dashboard/admin/');
      }

    }
    else if(res.data.status === 'failed') {
      status.value = res.data.message;
    }

  }else{
    status.value ="Error in network"
  }


}


</script>

<template>
  <Header />
  <section class="vh-100">
    <div class="row px-3 d-flex justify-content-center align-items-center h-100">

      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="error text-center bg-danger text-white text-uppercase p-3" v-if="status">{{status}}</div>
        <h2 class="text-center text-uppercase">Use OTP received on your phone to proceed</h2>
        <form @submit.prevent="Verify">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">OTP</label>
            <input type="number" class="form-control" v-model="otp" placeholder="Enter otp your have received">
          </div>

          <div class="">
            <button type="submit" class="w-100 btn btn-primary btn-block">Proceed</button>
          </div>
          <br>
        </form>
      </div>

    </div>

  </section>
</template>

<style scoped>

</style>

