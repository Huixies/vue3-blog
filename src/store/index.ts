import { reactive } from 'vue';
import {todayPost,thisWeek,thisMonth} from '@/mock';
import { Post } from '@/types';
import axios from 'axios';

interface PostsState{
    ids: string[];
    all: Record<string, Post>;
    loaded: boolean;
};

const initialPostsState = (): PostsState => ({
    ids: [
        // todayPost.id.toString(),
        // thisWeek.id.toString(),
        // thisMonth.id.toString()
    ],
    all: {
        // [todayPost.id] : todayPost,
        // [thisWeek.id] : thisWeek,
        // [thisMonth.id] : thisMonth,
    },
    loaded: false
});

interface State{ 
    posts: PostsState;
}

const initialState = (): State => ({
    posts:initialPostsState()
})

class Store{
    protected state: State;

    constructor(initialState: State) {
        this.state = reactive(initialState)
    }

    public getState(): State{
        return this.state
    }

    async fetchPosts() {
        const response = await axios.get<Post[]>('/posts')
        //处理数据
        for (const post of response.data) {
            if (!this.state.posts.ids.includes(post.id.toString())) {
                this.state.posts.ids.push(post.id.toString());
            }
            this.state.posts.all[post.id] = post;
        }
        this.state.posts.loaded = true;
    }

    async createPost(post:Post) {
        const response = await axios.post<Post>('/posts', post);
        this.state.posts.all[response.data.id] = response.data;
        this.state.posts.ids.push(response.data.id.toString());
    }

    async updatePost(post:Post) {
        const response = await axios.put<Post>('/posts', post);
        this.state.posts.all[response.data.id] = response.data;
    }
}

const store = new Store(initialState())
export const useStore = () => store;