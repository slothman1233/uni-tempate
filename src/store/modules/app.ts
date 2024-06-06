import { Module } from 'vuex';
import { App, RootStateTypes } from '../interface/index';
import { App as Apps } from '../mutation-types';
import devConfigModel from '@/common/config/dev';
// getter（获取数据）、mutation（修改数据）、action（异步调用mutation来修改数据）
const app: Module<App, RootStateTypes> = {
    namespaced: true,
    state() {
        return {
            module: 'app',
            count: 0,
            configModel: devConfigModel,
        };
    },
    getters: {
        [Apps.mutations.INCREMENT](state) {
            return state.configModel;
        },
    },
    mutations: {
        [Apps.mutations.INCREMENT](state) {
            state.count++;
        },

        [Apps.mutations.CONFIGMODEL](state, configModel: clientEnv) {
            state.configModel = configModel;
        },
    },
    actions: {
        async [Apps.action.CHANGECOUNT]({ commit }, num: App) {
            console.log('app.ts receive num is :', num);
            commit(Apps.mutations.INCREMENT, num);
        },

        async [Apps.action.CONFIGMODEL]({ commit }, configModel: clientEnv) {
            commit(Apps.mutations.CONFIGMODEL, configModel);
        },
    },
};

export default app;
