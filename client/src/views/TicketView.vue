<template>
  <div id="intro" class="p-5 text-center bg-light">
    <h1 class="mb-3 h2">Ticket</h1>
    <p class="mb-3">Grab your ticket fast.</p>
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
            <div class="row mb-5">
              <div class="col d-flex justify-content-center align-items-center">
                <div class="row">
                  <ticket-card
                    v-for="ticket in tickets"
                    :key="ticket.id"
                    :ticket="ticket"
                  >
                  </ticket-card>
                </div>
                <!-- end div row card -->
              </div>
            </div>
            <div class="row">
              <h3>Currency Exchange</h3>
              <select name="" id="">
                <option
                  value=""
                  v-for="(currency, index) in currencies.rates"
                  :key="index"
                >
                  {{ currency }}
                </option>
              </select>
            </div>
            <div class="row mt-5">
              <footer class="text-center">
                <p>Copyright - 2022</p>
              </footer>
            </div>
          </div>
        </div>
        <!-- end div container -->
      </section>
      <!--Section: Content-->
    </div>
  </main>
  <!--Main layout-->
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import TicketCard from "../components/TicketCard.vue";
export default {
  components: {
    TicketCard,
  },
  computed: {
    ...mapState(useIndexStore, ["tickets", "currencies"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["fetchTicket"]),
  },
  created() {
    this.fetchTicket();
    this.tickets;
    this.currencies;
    console.log(this.currencies);
  },
};
</script>
