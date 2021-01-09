<template>
  <section class="section">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "App",
  components: {

  },
})
</script>