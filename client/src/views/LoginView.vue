<template>
  <div id="intro" class="p-5 text-center bg-light">
    <h1 class="mb-3 h2">Login</h1>
    <p class="mb-3">Login your account and get your ticket.</p>
  </div>
  <!--Main layout-->
  <main class="my-5">
    <div class="container">
      <!--Section: Content-->
      <section class="vh-100">
        <div class="container">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style="border-radius: 25px">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign in
                      </p>
                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              id="email"
                              class="form-control"
                              v-model="email"
                            />
                            <label class="form-label" for="email"
                              >Email address</label
                            >
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              class="form-control"
                              v-model="password"
                            />
                            <label class="form-label" for="password"
                              >Password</label
                            >
                          </div>
                        </div>
                        <div
                          class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                        >
                          <button
                            type="button"
                            class="btn btn-primary btn-md mx-4"
                            v-on:click.prevent="loginHandler(email, password)"
                          >
                            Log in
                          </button>
                          <div id="g-sign" class="pl-5"></div>
                        </div>
                      </form>
                    </div>
                    <div
                      class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                    >
                      <img
                        src="https://cdn.pixabay.com/photo/2018/01/06/08/42/emotions-3064578__340.jpg"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->
    </div>
  </main>
  <!--Main layout-->
</template>

<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["loginHandler"]),
  },
};
</script>
