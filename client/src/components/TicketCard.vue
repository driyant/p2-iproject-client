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
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
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
        <a href="" class="btn btn-primary" v-on:click.prevent="ticket.id"
          >Buy Ticket</a
        >
      </div>
    </div>
    <!-- Card -->
  </div>
</template>

<script>
export default {
  props: ["ticket"],
};
</script>
