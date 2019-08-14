<template>
  <div class='container'>
    <scroll-view
    class='scroll-list'
    scroll-y=true
    enable-back-to-top=true
    @scrolltolower=onScrollToBottom>
      <past-list :result=result[this.type] />
    </scroll-view>
  </div>
</template>

<script>
import pastList from '../../components/list/pastList';
import { training } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '往期培训',
    });
    const that = this;
    // training({
    //   type: that.typeC,
    //   session: that.$store.getters.getSession,
    // }).then((response) => {
    //   if (response.count !== 0) {
    //     that.result = response.results;
    //   }
    //   wx.hideLoading();
    // });
    this.result.map((e) => {
      let i = 0;
      for (i = 0; i < e.length; i += 1) {
        e[i].index = i;
        e.selected = false;
      }
      return e;
    });
  },
  data: {
    result: [
      [
        {
          theme: '如何利用电子资源助力论文及科研选题',
          time: '2019年3月8日 18:30-20:00',
          place: '总馆D栋117培训室',
          speaker: '胡永生（咨询馆员）',
          content: '您还在为毕业论文如何撰写发愁么？图书馆林林总总的电子资源你还一头雾水么？我们为你答疑解惑！本课程将为你讲述课题选题原则和途径，检索结果的调整与处理，检出文献阅读分析技巧，让图书馆的电子资源能为你毕业论文写作提供帮助。',
        },
        {
          theme: '论文写作助手—— NoteExpress个人文献管理软件介绍',
          time: '2019年3月15日 18:30-20:00',
          place: '总馆D栋117培训室',
          speaker: '陈进（咨询馆员）',
          content: '写论文或做科研时参考文献太多太乱？试试NoteExpress吧！NoteExpress是目前流行的参考文献管理工具软件，其核心功能是帮助读者在整个科研流程中高效利用电子资源。本讲将介绍NoteExpress个人文献管理软件的特点及使用方法。',
        },
        {
          theme: 'NoteExpress个人文献管理软件介绍',
          time: '2019年3月18日 18:30-20:00',
          place: '工学分馆四楼教学培训室',
          speaker: '汪秀丽（咨询馆员）',
          content: 'NoteExpress是目前流行的参考文献管理工具软件，其核心功能是帮助读者在整个科研流程中高效利用电子资源。本讲将介绍NoteExpress个人文献管理软件的特点及使用方法。',
        },
        {
          theme: '参考文献管理软件NoteExpress简明教程',
          time: '2019年3月19日 18:30-20:00',
          place: '信息科学分馆五楼培训室',
          speaker: '龚芙蓉（学科馆员）',
          content: '珞樱缤纷毕业季，亲爱的同学，你的毕业论文是否也开得如樱花一般绚丽？是否参考文献还处在复制粘贴的低端时代？请到图书馆来，让我们给你一份完美的答卷！本讲座讲解国内参考文献管理软件NoteExpress的检索、管理、写作、分析四种功能，教你如何轻松边写作边插入参考文献以及如何管理撰写毕业论文所需的专业核心文献等。',
        },
        {
          theme: '论文写作必备——Word应用技巧介绍',
          time: '2019年3月22日 18:30-20:00',
          place: '总馆D栋117培训室（D栋一楼电梯口旁）',
          speaker: '陈阵（校友）',
          content: '又是一年毕业论文写作季，掌握一些必要的Word应用技巧，能够显著提升论文的写作效率：同时也对将来的工作大有裨益。打开Word，也许你看到的只是空荡荡的界面，但Word的精髓是“大盈若冲、其用无穷”，让我们通过这节课一起领悟。',
        },
        {
          theme: '全文获取?So easy!简单高效的全文获取方法介绍',
          time: '2019年3月29日 18:30-20:00',
          place: '总馆D栋117培训室（D栋一楼电梯口旁）',
          speaker: '廖莎（馆际互借员）',
          content: '找到想要的文献，却发现无法下载全文？试试文献传递吧！本讲座将告诉您当图书馆没有收藏您所需的文献时，该如何查找并获取文献原文。',
        },
        {
          theme: '尖叫吧，HR!----求职简历制作方法小诀窍',
          time: '2019年4月12日 18:30-20:00',
          place: '总馆D栋117培训室（D栋一楼电梯口旁）',
          speaker: '朱丹（宣传馆员）',
          content: '一个美好的人生从一份满意的工作开始，一份满意的工作从一份动人的简历开始，今天的你还在写枯燥乏味的简历吗，还不快点加入我的战队，让我教你几个简历制作的小诀窍，从标题到内容，轻松两步让HR为你尖叫！准备好接大招吧！',
        },
        {
          theme: '幻灯片速成技巧及心得感悟',
          time: '2019年4月26日 18:30-20:00',
          place: '总馆D栋117培训室（D栋一楼电梯口旁）',
          speaker: '陈阵（校友）',
          content: '答辩在即，你的答辩幻灯准备好了吗？职场沉浮，你是否曾因求职幻灯无法客观表述自己的实力而被用人单位婉拒？是否还在套用几年前师兄留下的PPT模板？是否苦求提升PPT技术而不得其法？是否订阅了许多PPT课程却因拖延症发作无暇研习？本讲座将从战术层面、分八个环节讲解如何包装你的PPT，如何避免常犯的错误；将从战略层面、分五个部分讲解如何迅速掌握各种技巧，如何养成幻灯思维；最后还有各种技巧演示、心得分享和互动环节，精彩不容错过！',
        },
      ],
    ],
    type: 0,
    showModal: false,
    key: -1,
    text: '我们将在培训开始前一小时向您发送推送提醒',
    title: '确定提醒？',
  },
  components: {
    pastList,
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
      if (this.type === 0) return 'B';
      if (this.type === 1) return 'X';
      return 'S';
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
