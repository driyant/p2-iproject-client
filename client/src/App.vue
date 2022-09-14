<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
    RouterView,
  },
};
</script>
