import * as types from '@/store/types';

const state = {
    shareMask: false,
}

const getters = {
    shareMask: state => state.shareMask,
}

const actions = {
    SHARE_MASK({commit}, res) {
        commit(types.SHARE_MASK, res);
    }
}

const mutations = {
    [types.SHARE_MASK](state, res) {
        state.shareMask = res;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

