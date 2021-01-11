import { mount } from '@vue/test-utils';
import PostWriter from '@/components/PostWriter.vue';
import {basePost} from '@/mock';

describe('PostWriter', () => {
    it('测试写博客组件', () => {
        const wrapper = mount(PostWriter, {
            props: {
                post:{...basePost}
            }
        });
        console.log(wrapper.emitted());     
    })
})