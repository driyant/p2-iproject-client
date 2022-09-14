<template>
  <header>
    <!-- Navbar -->
    <nav-bar></nav-bar>
    <!-- Navbar -->
    <!-- Jumbotron -->
    <jumbo-tron></jumbo-tron>
    <!-- Jumbotron -->
  </header>
  <!--Main layout-->
  <main class="my-5">
    <div class="container">
      <!--Section: Content-->
      <section class="mt-2">
        <div class="row gx-5">
          <p>content here</p>
        </div>
      </section>
      <!--Section: Content-->
    </div>
  </main>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import JumboTron from "../components/JumboTron.vue";
// import { useIndexStore } from "../stores/index";
// import { mapActions, mapState } from "pinia";
export default {
  components: {
    NavBar,
    JumboTron,
  },
};
</script>
