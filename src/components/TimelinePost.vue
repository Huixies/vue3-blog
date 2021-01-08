<template>
    <div>
        <a data-test="post" class="panel-block">
           <div>
             <a>{{post.title}}</a>
             <div>{{post.created.format('yyyy-MM-dd')}}</div>
           </div>
        </a>
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
    }
})
</script>

<style>
    
</style>