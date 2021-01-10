<template>
  <nav class="navbar">
      <div class="navbar-end">
          <div>
              <router-link class="button" to="/posts/new">添加博客</router-link>
          </div>
      </div>
  </nav>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Navbar",
  components: {

  },
})
</script>