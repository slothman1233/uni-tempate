<template>
    <view class="content">
        <lsjAlbum :show="show" :foldNum="9" :images="images" @close="show = false" />
        <image class="logo" src="/static/assets/image/logo.png" />
        <view class="text-area">
            <text class="title" @click="navigatess"> 状态管理示例1</text>
        </view>

       
    </view>
</template>

<script setup lang="ts">
    import routers from '@/common/router/routers';
    import lsjAlbum from "@/components/lsjAlbum/index.vue"
    import { getrandom } from '@/services/randomDataService/randomData';
    import { useStore } from '@/store';
    import { onMounted, ref } from 'vue';
    const title = ref('Hello');

    const store = useStore();

    const show = ref(true);

    const images = [
        {
            title: '美丽的图片离不开精辟的标题',
            value: [
                'https://img0.baidu.com/it/u=148131753,649968631&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=666',
                'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0229%2F146a652cj00s9lh240012d000hs00qnm.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
                'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0229%2F81282461j00s9lh24001gd000hs00qnm.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage109.360doc.com%2FDownloadImg%2F2024%2F03%2F2207%2F281291804_4_20240322073231879.png&refer=http%3A%2F%2Fimage109.360doc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1716949477&t=23acdfa2666281fb227814009966558b',
                'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0229%2Fe291600bj00s9lh24000sd000hs00qnm.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
                'https://img2.baidu.com/it/u=850708730,1816402586&fm=253&fmt=auto&app=138&f=JPEG?w=570&h=713',
                'https://img.bugela.com/uploads/2021/07/20/c983b757be16d130b034f6cdb1d5a86f.jpg',
                'https://img0.baidu.com/it/u=148131753,649968631&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=666',
                'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0229%2F146a652cj00s9lh240012d000hs00qnm.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
                'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0229%2F81282461j00s9lh24001gd000hs00qnm.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage109.360doc.com%2FDownloadImg%2F2024%2F03%2F2207%2F281291804_4_20240322073231879.png&refer=http%3A%2F%2Fimage109.360doc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1716949477&t=23acdfa2666281fb227814009966558b',
                'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0229%2Fe291600bj00s9lh24000sd000hs00qnm.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
                'https://img2.baidu.com/it/u=850708730,1816402586&fm=253&fmt=auto&app=138&f=JPEG?w=570&h=713',
            ],
        },
        {
            title: '懒得写弹框动画了，需要的自己外面套吧~',
            value: [
                'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0229%2F81282461j00s9lh24001gd000hs00qnm.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
                'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0229%2F146a652cj00s9lh240012d000hs00qnm.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
            ],
        },
    ];

    console.log(store.state.app.configModel.apiPath);

    onMounted(async () => {
        const a = await getrandom();
        console.log(a);
    });
    const navigatess = function() {
        // console.log(123123123);

        uni.navigateTo({
            url: routers.storedemo.path,
        });
    };
</script>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 200rpx;
        width: 200rpx;
        margin-top: 200rpx;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50rpx;
    }

    .text-area {
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 36rpx;
        color: #8f8f94;
    }
</style>
