import { GetterTree, MutationTree, ActionTree } from 'vuex';

interface State {
    list: string[]
}

const state: State = {
    list: ['a','b']
};
const getters: GetterTree<State, any> = {
    list: (state: State) => state.list,
};
const mutations: MutationTree<State> = {
    updateList(state: State, newList: string[]) {
        state.list = newList;
    }
};
const actions: ActionTree<State, any> = {
    updateList({commit, state: State}, newList) {
        commit('updateList', newList);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};