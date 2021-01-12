<template>
  <div>
    <div class="columns">
      <div class="colum">
        <div class="field">
          <div class="label">博客标题</div>
          <div class="control">
            <input data-test='post-title' type="text" v-model="title" class="input" />
            {{ title }}
          </div>
        </div>
      </div>
    </div>

    <!-- 写的内容和展示的内容 -->
    <div class="columns">
      <div class="column is-one-half">
        写的内容
        <div data-test='markdown' contenteditable id="markdown" ref="contentEditable" @input="handleEdit" />
      </div>
      <div class="column is-one-half">
        <div v-html="html" />
      </div>
    </div>
    
    <div class="columns">
      <div class="column">
        <button 
          data-test='submit-post' 
          @click="handleSubmit" 
          class="button is-primary is-pulled-right"
        >
          提交
        </button>
      
        <button 
          data-test='submit-post' 
          @click="$router.go(-1)" 
          class="button is-danger"
        >
          取消
        </button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent, onMounted, ref,watch} from 'vue';
import { Post } from '@/types';
//@ts-ignore
import {parse,MarkedOptions} from 'marked';
import {highlightAuto} from 'highlight.js';
import debounce from 'lodash/debounce.js';

export default defineComponent({
  name: "PostWriter",
  components: {},
  props:{
      post:{
        type:Object as () => Post,
        required:true
      },
  },

  setup(props,ctx){
      const title = ref(props.post.title);
      const markdown = ref(props.post.markdown)
      const contentEditable = ref<null | HTMLDivElement>(null);
      const html = ref('');

      const options:MarkedOptions = {
        highlight:(code:string)=>highlightAuto(code).value
      };

      const handleEdit = () =>{
        //@ts-ignore
        markdown.value =  contentEditable.value.innerText
      };

      //保存
      const handleSubmit = ()=>{
        //将完整数据提交到父级
        const post: Post = {
          ...props.post,
          title: title.value,
          markdown: markdown.value,
          html: html.value
        };
        //注册事件
        ctx.emit('save',post);
      }

      const update =  (value: string) => {
        html.value = parse(value,options)
      };

      watch(
         ()=>markdown.value,
         debounce(update,500),
         { immediate:true}
      );
    
      onMounted(()=>{ 
        //@ts-ignore
        contentEditable.value.innerText = markdown.value ;//div
      });
  
      return {title,contentEditable,handleEdit,markdown,html,handleSubmit}
  }
})
</script>