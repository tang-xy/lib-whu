<template>
  <div class='container'>
    <div class='list-type'>
      <button class='list-choice' :class="{ 'list-choice-selected': notice }" @click=onChoiceNotice>毕业指导</button>
      <button class='list-choice' :class="{ 'list-choice-selected': source }" @click=onChoiceSource>学习助手</button>
      <button class='list-choice' :class="{ 'list-choice-selected': classInfo }" @click=onChoiceClass>实用软件</button>
    </div>
    <scroll-view
    class='scroll-list'
    scroll-y=true
    enable-back-to-top=true
    @scrolltolower=onScrollToBottom>
      <training-list :result=result[this.type] @click-card=onClickCard />
    </scroll-view>
  </div>
</template>

<script>
import trainingList from '../../components/list/trainingList';
import { searchLib } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '培训日程',
    });
  },
  data: {
    result: [
      [
        {
          theme: '撰写毕业论文时，如何利用图书馆的资源和服务',
          time: '2019年3月1日 18.30-22.00',
          place: '总馆D栋117培训室',
          speaker: '常定姁（咨询馆员）',
          content: '又是一年毕业季，你是否正在忙着写毕业论文呢？不妨来看看图书馆有哪些资源和服务能够为你所用吧！本讲将从撰写毕业论文的角度出发，介绍如何查找图书馆资源，以及图书馆有哪些服务能为你的毕业论文写作提供帮助。',
        },
        {
          theme: '撰写期刊论文时，如何利用图书馆的资源和服务',
          time: '2019年3月2日 18.30-22.00',
          place: '总馆D栋118培训室',
          speaker: '常定姁（咨询馆员）',
          content: '又又是一年毕业季，你是否正在忙着写毕业论文呢？不妨来看看图书馆有哪些资源和服务能够为你所用吧！本讲将从撰写毕业论文的角度出发，介绍如何查找图书馆资源，以及图书馆有哪些服务能为你的毕业论文写作提供帮助。',
        },
      ],
    ],
    type: 0,
  },
  components: {
    trainingList,
  },
  computed: {
    notice() {
      return this.type === 0;
    },
    source() {
      return this.type === 1;
    },
    classInfo() {
      return this.type === 2;
    },
    typeC() {
      if (this.type === 0) return 'N';
      if (this.type === 1) return 'Z';
      return 'P';
    },
  },
  methods: {
    onScrollToBottom() {

    },
    onChoiceNotice() {
      this.type = 0;
    },
    onChoiceSource() {
      this.type = 1;
    },
    onChoiceClass() {
      this.type = 2;
    },
  },
  onReachBottom() {
  },
};
</script>

<style lang="scss" scoped>
.container{
  display: block;
  padding-left: 24rpx;
  padding-right: 30rpx;
  padding-top: 43rpx;
  background-color: #f7f7f7;
  height: 100vh;
  width: 100vw;;
  .list-type{
    display: flex;
    border-bottom-color: #c7c7c7;
    border-bottom-style: solid;
    border-bottom-width: 2rpx;
    border-radius: 0;
    .list-choice{
      // position: static;
      color: #ffffff;
      font-size:29rpx;
      font-family:MicrosoftYaHei;
      background-color: #C7C7C7;
      border: none;
      border-radius: 0;
      width: 226rpx;
      height: 61rpx;
    }
    .list-choice::after{
      border: none;
    }
    .list-choice-selected{
      border-bottom-color: #4a88dd;
      background-color: #4A88DD;
      border-bottom-style: solid;
      border-radius: 0;
    }
  }
}

</style>
