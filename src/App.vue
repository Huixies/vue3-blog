<template>
<div class="modal" :style="style">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div id="modal"></div>
  </div>
  <button class="modal-close is-large" @click="modal.hideModal"></button>
</div>
<FormInput type='text' name="用户名" v-model="username" error='请填写用户名' />
{{username}}

  <Navbar />
  <section class="section">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script lang='ts'>
import {computed, defineComponent, ref} from 'vue';
import Navbar from '@/components/Navbar.vue';
import {useModal} from '@/utils/useModal';
import FormInput from '@/components/FormInput.vue';

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    FormInput
  },
  setup() {
    const modal = useModal();
    const username = ref('username')
    const style = computed(()=>({
      display:modal.visible.value?'block':'none',
    }));

    return {modal,style,username}
  }
})
</script>