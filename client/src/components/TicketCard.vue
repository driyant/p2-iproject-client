<template>
  <div class="col">
    <!-- Card -->
    <div class="card">
      <!-- Card image -->
      <div class="view overlay">
        <img
          class="card-img-top"
          src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
          alt="Card image cap"
        />
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

      <!-- Card content -->
      <div class="card-body">
        <!-- Title -->
        <h4 class="card-title">Ticket Regular</h4>
        <!-- Text -->
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <!-- Button -->
        <a href="#" class="btn btn-primary">Book</a>
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
