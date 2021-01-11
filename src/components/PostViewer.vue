<template>
    <router-link :to="to" class="button is-rounded is-link">
            编辑&nbsp;<i class="fa fa-edit"></i>
    </router-link>
    <div>
        <h1>
            博客标题：{{post.title}}
        </h1> 
        <div>
            博客内容：{{post.markdown}}
        </div> 
    </div>
</template>

<script lang='ts'>
import { useStore } from '@/store';
import {defineComponent} from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: "PostViewer",
  components: {},
  async setup(){
      const route = useRoute();
      const store = useStore();
      const id = route.params.id as string;
      
      if(!store.getState().posts.loaded){
          await store.fetchPosts();
      }
      const post = store.getState().posts.all[id];

      return { post,to:`/posts/${post.id}/edit` }
  }
})
</script>