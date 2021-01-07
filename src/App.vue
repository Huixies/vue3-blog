<template>
  <section class="section">
    <div class="container">
      <Timeline />
    </div>
  </section>
</template>

<script lang='ts'>
import Timeline from "./components/Timeline.vue";
export default {
  name: "App",
  components: {
    Timeline,
  },
};
</script>