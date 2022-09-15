<template>
  <tr>
    <th scope="row">{{ index + 1 }}</th>
    <td>{{ order.Ticket.ticketEvent }}</td>
    <td>{{ order.Ticket.price }}</td>
    <td>{{ order.Ticket.time }}</td>
    <td>{{ order.Ticket.venue }}</td>
    <td>{{ order.status }}</td>
    <td>
      <button class="btn btn-primary" v-on:click="payProcess(order.id)">
        Pay
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";
export default {
  props: ["order", "index"],
  methods: {
    ...mapActions(useIndexStore, ["payProcess"]),
  },
};
</script>
