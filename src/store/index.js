// 组装模块并导出 store 的文件
import Vuex from 'vuex'
import Vue from 'vue'
// vuex的各个模块
import index from './modules/index'
import common from './modules/common';
import user from './modules/user';
import newsList from './modules/newsList';
import mine from './modules/mine';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        index,
        common,
        newsList,
        user,
        mine
    }
})