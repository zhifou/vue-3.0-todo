import { createStore } from 'vuex';
import list from './list';
import detail from './detail';

interface State {
    userName: string
}

export default createStore({
    state(): State {
        return {
            userName: '四大神猴',
        };
    },
    getters: {
        userName: (state: State) => state.userName,
    },
    // mutations: {
    //     updateName: (state: State, newName: string) => {
    //         state.userName = newName;
    //     }
    // },
    // actions: {
    //     updateName: (context: any, newName: string) => {
    //         context.commit('updateName', newName);
    //     }
    // },
    modules: { list, detail }
})
