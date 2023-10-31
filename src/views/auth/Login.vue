
<!--<script setup>-->
<!--import {onMounted, ref} from "vue";-->
<!--import axios from "axios";-->
<!--import {useRouter} from "vue-router";-->
<!--const router = useRouter()-->
<!--const email = ref('')-->
<!--const password = ref('')-->

<!--import {auth} from "@/compossables/auth";-->
<!--const {base_url,authHeader} = auth()-->



<!--const login =async () => {-->
<!--  if(email.value=='' && password.value==''){-->
<!--    regerror.value = 'Please fill all fields'-->
<!--  }-->
<!--  const formData = new FormData();-->
<!--  formData.append('email', email.value)-->
<!--  formData.append('password', password.value)-->
<!--  const res = await axios.post(base_url.value+'auth/login',formData)-->
<!--  if(res.status=== 200) {-->
<!--    if (res.data.status === 'success') {-->
<!--      localStorage.setItem('token', res.data.token);-->
<!--      await router.push('/');-->
<!--    }-->
<!--    else if(res.data.status === 'failed') {-->
<!--      regerror.value = res.data.message;-->
<!--    }-->

<!--  }else{-->
<!--    regerror.value ="Error in network"-->
<!--  }-->




<!--}-->


<!--</script>-->

<template>
  <section class="vh-100">
    <div class="row px-3 d-flex justify-content-center align-items-center h-100">

      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="error text-center bg-danger text-white text-uppercase">{{regerror}}</div>
        <h2 class="text-center text-uppercase">Login here</h2>
        <form @submit.prevent="Login">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" v-model="email" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="password">
          </div>

          <div class="">
            <button type="submit" class="w-100 btn btn-primary btn-block">Login</button>
          </div>
        </form>
      </div>

    </div>

  </section>
</template>

<style scoped>

</style>

