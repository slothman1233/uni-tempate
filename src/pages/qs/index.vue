<template>
    <div>qslist</div>
    <div> 12321 </div>
    <cpmDemo></cpmDemo>
    <u-button type="primary">主要按钮 {{ show }}</u-button>
    <u-action-sheet :list="list"></u-action-sheet>
    <u-action-sheet :list="list" v-model="show"></u-action-sheet>
    <u-button @click="show = true">打开ActionSheet</u-button>
    <iconfont name="icon-yonghu" :color="'#4bff50'" :fontSize="'60px'"></iconfont>
    <view @click="setcount">{{ store.state.app.count }}</view>
</template>

<script lang="ts">
    import { defineComponent, reactive, toRefs } from 'vue';
    import { propType, staticDataModel } from './model';
    import cpmDemo from './components/cpmDemo/index.vue';
    import HelloWorlds from '@/components/HelloWorlds/index.vue';
    import iconfont from '@/components/IconFonts/index.vue';
    import { useStore, usedispatch } from '@/store';
    import { App } from '@/store/mutation-types';

    export default defineComponent({
        name: 'qsList',
        components: { cpmDemo, HelloWorlds, iconfont },
        setup(props: propType, ctx) {
            const store = useStore();

            console.log(store.getters);

            const staticData: staticDataModel = reactive({
                ...props,
                list: [
                    {
                        text: '点赞',
                        color: 'blue',
                        fontSize: 28,
                    },
                    {
                        text: '分享',
                    },
                    {
                        text: '评论',
                    },
                ],
                show: false,
            });

            const refData = toRefs(staticData);

            const setcount = () => {
                usedispatch(store.state.app.module, App.action.CHANGECOUNT);
            };

            return {
                ...refData,
                store,
                setcount,
            };
        },
    });
</script>

<style lang="less">
    body {
        display: flex;
    }
</style>
