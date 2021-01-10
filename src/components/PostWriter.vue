<template>
  <div>
    <div class="columns">
      <div class="colum">
        <div class="field">
          <div class="label">博客标题</div>
          <div class="control">
            <input type="text" v-model="title" class="input" />
            {{ title }}
          </div>
        </div>
      </div>
    </div>
    <!-- 写的内容和展示的内容 -->
    <div class="columns">
      <div class="column is-one-half">
        写的内容
        <div contenteditable id="markdown" ref="contentEditable" @input="handleEdit" />
      </div>
      <div class="column is-one-half">
        <div v-html="html" />
      </div>
    </div>
    
  </div>
</template>

<script lang='ts'>
import {defineComponent, onMounted, ref,watch} from 'vue';
import { Post } from '@/types';
//@ts-ignore
import {parse} from 'marked';

export default defineComponent({
  name: "PostWriter",
  components: {},
  props:{
      post:{
        type:Object as () => Post,
        required:true
      },
  },
  setup(props){
      const title = ref(props.post.title);
      const markdown = ref(props.post.markdown)
      const contentEditable = ref<null | HTMLDivElement>(null);
      const html = ref('');

      const handleEdit = () =>{
        //@ts-ignore
        markdown.value =  contentEditable.value.innerText
      }
    watch(
      ()=>markdown.value,
      (value)=>{html.value = parse(value)},
      { immediate:true}
      );

      onMounted(()=>{ 
        //@ts-ignore
        contentEditable.value.innerText = markdown.value ;//div
    
      });
      
      return {title,contentEditable,handleEdit,markdown,html}
    }
})
</script>