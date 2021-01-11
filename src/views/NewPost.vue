<template>
     <PostWriter :post='post' @save='handleSave'/>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
import PostWriter from '@/components/PostWriter.vue';
import {Post} from '@/types';
import moment from 'moment';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "NewPost",
  components: {
    PostWriter
  },
  setup(){
      const post: Post= { 
          id: -1,
          title: "专注",
          markdown:'## vue composition api \n Vue3最新的API模式',
          html:'',
          authorId:0,
          created: moment()
      };

      const store = useStore();
      const router = useRouter();

      const handleSave = async (post:Post)=>{
        // console.log("save",post);
        //存储到store中
        await store.createPost(post);
        //路由跳转 
        router.push('/');
      }

      return { post,handleSave }
  }
})
</script>