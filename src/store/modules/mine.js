import * as types from '@/store/types';

const state = {
    // 帮助中心数据
    helpCenter: {},
    // 卡片详情数据
    couponDetail: {}
}

const getters = {
    helpCenter: state => state.helpCenter,
    couponDetail: state => state.backMsg
}

const actions = {
    HELP_CENTER({commit}, res) {
        commit(types.HELP_CENTER, res);
    },
    COUPON_DETAIL({commit}, res) {
        commit(types.COUPON_DETAIL, res);
    }
}

const mutations = { 
    [types.HELP_CENTER](state, res) {
        state.helpCenter = res;
    },
    [types.COUPON_DETAIL](state, res) {
        state.couponDetail = res;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
