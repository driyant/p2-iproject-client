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
  <!--Section: Content-->
  <!-- <main class="my-5">
    <div class="container">
      
      <section class="mt-2">
        <div class="row gx-5">
          <p>content here</p>
        </div>
      </section>

    </div>
  </main> -->
  <!--Section: Content-->
</template>

<script>
import NavBar from "../components/NavBar.vue";
import JumboTron from "../components/JumboTron.vue";
import { mapActions } from "pinia";
import { useIndexStore } from "../stores/index";
export default {
  components: {
    NavBar,
    JumboTron,
  },
  methods: {
    ...mapActions(useIndexStore, ["fetchTicket"]),
  },
  created() {
    this.fetchTicket();
  },
};
</script>
