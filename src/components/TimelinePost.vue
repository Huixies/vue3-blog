<template>
    <div>
        <router-link :to="to" data-test="post" class="panel-block">
           <div>
             <a>{{post.title}}</a>
             <div>{{post.created.format('yyyy-MM-dd')}}</div>
           </div>
        </router-link>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { Post } from '@/types';

export default defineComponent({
    name:'TimelinePost',
    props:{
        post:{
            type:Object as () => Post,
            required:true
        }
    },
    setup(props){
        return {
            to:`/posts/${props.post.id}`
        }
    }
})
</script>

<style>
    
</style>