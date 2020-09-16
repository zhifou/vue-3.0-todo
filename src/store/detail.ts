import { GetterTree, MutationTree, ActionTree } from 'vuex';

interface State {
    detail: string[];
    userName: string;
}

const state: State = {
    detail: ['d','e'],
    userName: 'martin'
};
const getters: GetterTree<State, any> = {
    detail: (state: State) => state.detail,
    userName: (state: State) => `Mr.${state.userName}`,
};
const mutations: MutationTree<State> = {
    updateDetail(state: State, newDetail: string[]) {
        state.detail = newDetail;
    },
    updateName(state: State, newName: string) {
        state.userName = newName;
    }
};
const actions: ActionTree<State, any> = {
    updateDetail({commit, rootState}, newDetail: string[]) {
        commit('updateDetail', newDetail);
    },
    updateName({commit, rootState}, newName: string) {
        commit('updateName', newName);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};