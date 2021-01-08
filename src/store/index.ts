import { reactive } from 'vue';
import {todayPost,thisWeek,thisMonth} from '@/mock';
import { Post } from '@/types';

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
}

const store = new Store(initialState())




export const useStore = () => store;