<template>
  <div id="intro" class="p-5 text-center bg-light">
    <h1 class="mb-3 h2">Contact View</h1>
    <p class="mb-3">The best article you can get but this is fake.</p>
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
                              >Your email</label
                            >
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="text"
                              class="form-control"
                              v-model="subject"
                            />
                            <label class="form-label" for="password"
                              >Subject</label
                            >
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <textarea
                              class="form-control"
                              id="text-area"
                              rows="3"
                              v-model="message"
                            ></textarea>
                            <label class="form-label" for="password"
                              >Your message</label
                            >
                          </div>
                        </div>
                        <div
                          class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                        >
                          <button
                            type="button"
                            class="btn btn-primary btn-md mx-4"
                            v-on:click.prevent="
                              sendMessageHandler(email, subject, message)
                            "
                          >
                            {{ !isLoading ? "Submit" : "Sending your message" }}
                          </button>
                          <div id="g-sign" class="pl-5"></div>
                        </div>
                      </form>
                    </div>
                    <div
                      class="col-md-10 col-lg-6 col-xl-7 d-flex flex-column align-items-center order-1 order-lg-2"
                    >
                      <h1>Contact Info</h1>
                      <p>Address : Street 9030 Boulevard, North Pole</p>
                      <p>Ticket Support: support@example.com</p>
                      <p>Phone: 62 881 1234 5678</p>
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
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
export default {
  data() {
    return {
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["sendMessageHandler"]),
  },
  computed: {
    ...mapState(useIndexStore, ["isLoading"]),
  },
  created() {
    this.isLoading;
  },
};
</script>
