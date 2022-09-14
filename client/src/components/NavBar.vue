<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container-fluid">
      <!-- Navbar brand -->
      <a
        class="navbar-brand"
        target="_blank"
        href="https://mdbootstrap.com/docs/standard/"
      >
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
          height="16"
          alt=""
          loading="lazy"
          style="margin-top: -3px"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <RouterLink to="/" class="nav-link" aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="lineup" class="nav-link">Line Up</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/ticket" class="nav-link">Ticket</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="info" class="nav-link">Info</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="contact" class="nav-link">Contact</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="order" class="nav-link" v-if="isLoggedin"
              >My Order</RouterLink
            >
          </li>
        </ul>
        <ul class="navbar-nav d-flex flex-row">
          <!-- Icons -->
          <li class="nav-item me-3 me-lg-0">
            <RouterLink
              to="/login"
              class="auth-modal-toggle btn btn-primary ms-2 me-1"
              data-auth-modal-tab="sign-in"
              style=""
              v-if="!isLoggedin"
              >Login</RouterLink
            >
          </li>
          <li class="nav-item me-3 me-lg-0">
            <RouterLink
              to="/signup"
              class="auth-modal-toggle btn btn-primary ms-2 me-1"
              data-auth-modal-tab="sign-in"
              style=""
              v-if="!isLoggedin"
              >Sign Up</RouterLink
            >
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a
              class="auth-modal-toggle btn btn-primary ms-2 me-1"
              data-auth-modal-tab="sign-in"
              style=""
              v-if="isLoggedin"
              v-on:click="logoutHandler"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar -->
</template>

<script>
import { RouterLink } from "vue-router";
import { mapState, mapActions } from "pinia";
import { useIndexStore } from "../stores/index";
export default {
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useIndexStore, ["isLoggedin"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["logoutHandler", "checkisLogin"]),
  },
  created() {
    this.checkisLogin();
  },
};
</script>
