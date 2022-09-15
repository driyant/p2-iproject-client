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
            <div class="row d-flex flex-row justify-content-center text-center">
              <h3>Currency Exchange</h3>
              <div class="form-outline mb-4">
                <input
                  type="number"
                  min="0"
                  id="form1Example1"
                  class="form-control"
                  v-model="number"
                  placeholder="Number want to convert in IDR - USD"
                />
                <label class="form-label" for="form1Example1"
                  >Number that want to convert in IDR - USD</label
                >
              </div>
              <!-- Submit button -->
              <button
                type="submit"
                v-on:click.prevent="convert(number)"
                class="btn btn-primary btn-block"
              >
                Convert
              </button>
            </div>
            <div class="ro mt-2">
              <p>Result: USD {{ this.numberConverted }}</p>
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
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    ...mapState(useIndexStore, [
      "tickets",
      "currencies",
      "resultConverted",
      "numberConverted",
    ]),
  },
  methods: {
    ...mapActions(useIndexStore, ["fetchTicket", "convert"]),
  },
  created() {
    this.fetchTicket();
    this.resultConverted;
    this.numberConverted;
    this.tickets;
    this.currencies;
    console.log(this.currencies);
  },
  mounted() {
    this.numberConverted;
  },
  updated() {
    this.numberConverted;
  },
};
</script>
