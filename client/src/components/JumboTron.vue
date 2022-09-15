<template>
  <!-- Jumbotron -->
  <div
    class="p-5 text-center bg-image rounded-3"
    style="
      background-image: url('https://images.pexels.com/photos/442540/pexels-photo-442540.jpeg?auto=compress&cs=tinysrgb&w=1600');
      height: 100vh;
    "
  >
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Music Party Festival</h1>
          <h2 class="mb-3">Event will be held on 24 May 2090</h2>
          <h4 class="mb-3">Jazz all festival, all night long.</h4>
          <RouterLink
            to="/ticket"
            class="btn btn-outline-light btn-lg"
            role="button"
            >Book your ticket</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>
