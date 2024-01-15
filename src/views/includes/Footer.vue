

<script setup>

</script>

<template>
  <div style="background-color: rgb(100,170,255)" class="row p-3">
    <div class="col col-6">
      <h3 class="shadow text-white">TOPGUARD CLOUD</h3>
      <p>
        Your secure forensic cloud for your data.
      </p>
    </div>

    <div class="col">
        <p style="font-size: 21px;color: black;">Quick links</p>



      <router-link to="login"  class="mybtn text-decoration-none text-light">
      <li class="list-unstyled ">
         Login
      </li>
        <br>
      </router-link>
      <router-link to="login"  class="mybtn text-decoration-none text-light">
      <li class="list-unstyled ">
         Register
      </li>
        <br>
      </router-link>
      <router-link to="login"  class="mybtn text-decoration-none text-light">
      <li class="list-unstyled ">
         Dashboard
      </li>
      </router-link>
      <br>
      <router-link to="login"  class="mybtn text-decoration-none text-light">
      <li class="list-unstyled ">
         About us
      </li>
      </router-link>
      <br>
      <router-link to="login"  class="mybtn text-decoration-none text-light">
      <li class="list-unstyled ">
         Contacts
      </li>
      </router-link>
      <br>


    </div>
    <div class="col">
      <h2>Contact Us</h2>

      <form action="../processor.php" method="post">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>


        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit" name="inquire" class="float-end">Send</button>
      </form>

    </div>

  </div>
</template>

<script>

</script>

<style scoped>
li{
  padding: 0.5rem 1rem;

}
li:hover{
  background-color: blue;
  color: white;
}
input{
  display: block;
  width: 100%;
}
textarea {
  border-top-left-radius:20%;
  border-bottom-right-radius:24%;
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

</style>