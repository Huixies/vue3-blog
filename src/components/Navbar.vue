<template>
  <nav class="navbar is-dark topNav ">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <i class="fa fa-home"></i>
          </router-link>
        </div>
        <div class="navbar-menu" id='topNav'>
          <div class="navbar-start ">
            <router-link class="navbar-item" to="/">博客</router-link>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <div class="control">
                  <button @click="modal.showModal"  class="button is-small is-info is-outlined" to="/register">
                    <span class="icon">
                      <i class="fa fa-user-plus"></i>
                    </span>
                    <span>注册</span>
                  </button>
                </div>
                <div class="control">
                  <button class="button is-small " to="/login">
                    <span class="icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <span>登录</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <teleport to='#modal' v-if="modal.visible">
        <!-- 插入组件/动态组件 -->
        注册
      </teleport>
  </nav>
</template>

<script lang='ts'>
import {defineComponent,ref} from 'vue';
import { useModal } from '@/utils/useModal';

export default defineComponent({
  name: "Navbar",
  components: {},
  setup() {
      return {modal:useModal()};
  }
})
</script>