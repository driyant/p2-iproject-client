<template>
  <div id="intro" class="p-5 text-center bg-light">
    <h1 class="mb-3 h2">Ticket Book Order</h1>
    <p class="mb-3">Showing your list of book order ticket.</p>
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
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ticket Event</th>
                  <th scope="col">Price</th>
                  <th scope="col">Time</th>
                  <th scope="col">Venue</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <table-row-order
                  v-for="(order, index) in orders"
                  :key="order.id"
                  :order="order"
                  :index="index"
                ></table-row-order>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <!--Section: Content-->
    </div>
  </main>
  <!--Main layout-->
</template>

<script>
import TableRowOrder from "../components/TableRowOrder.vue";
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
export default {
  components: {
    TableRowOrder,
  },
  computed: {
    ...mapState(useIndexStore, ["orders"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["fetchOrderDetail"]),
  },
  created() {
    this.fetchOrderDetail();
    this.orders;
  },
};
</script>
