<template>
  <div class="col">
    <!-- Card -->
    <div class="card">
      <!-- Card image -->
      <div class="view overlay">
        <img
          class="card-img-top"
          :src="ticket.img_url"
          :alt="ticket.ticketEvent"
        />
      </div>
      <!-- Card content -->
      <div class="card-body">
        <!-- Title -->
        <h4 class="card-title">{{ ticket.ticketEvent }}</h4>
        <!-- Text -->
        <p class="card-text">
          Price: {{ ticket.price }}
          <br />
          Venue: {{ ticket.venue }}
          <br />
          Time: {{ ticket.time }}
          <br />
          Date: {{ ticket.date.slice(0, 10) }}
        </p>
        <!-- Button -->
        <a
          class="btn btn-primary"
          v-on:click.prevent="addTicketOrder(ticket.id)"
          >Buy Ticket</a
        >
      </div>
    </div>
    <!-- Card -->
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";
export default {
  props: ["ticket"],
  methods: {
    ...mapActions(useIndexStore, ["addTicketOrder"]),
  },
};
</script>
