<template>
  <div class='container'>
    <div class='list-type'>
      <button class='list-choice' :class="{ 'list-choice-selected': notice }" @click=onChoiceNotice>学习助手</button>
      <button class='list-choice' :class="{ 'list-choice-selected': source }" @click=onChoiceSource>实用软件</button>
      <button class='list-choice' :class="{ 'list-choice-selected': classInfo }" >敬请期待</button>
    </div>
    <scroll-view
    class='scroll-list'
    scroll-y=true
    enable-back-to-top=true
    @scrolltolower=onScrollToBottom>
      <training-list :result=result[this.type] @bell=onB />
    </scroll-view>
    <tip-modal :showModal="showModal" :text="text" :title="title" @confirm=onConfirm @cancel=onCancel />
    <false-modal :showModal="showFalse" text="当前距离培训开始超过7天，暂不支持设置提醒" title="设置失败" @confirm=onCancelFalse />
  </div>
</template>

<script>
import tipModal from '../../components/modal/tipModal';
import falseModal from '../../components/modal/falseModal';
import trainingList from '../../components/list/trainingList';
import { training } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '培训日程',
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
          theme: '国内外学位论文的查找',
          time: '2019年9月4日 18:30-20:00',
          place: '工学分馆四楼教学培训室',
          speaker: '路雅祺（学科馆员）',
          content: '介绍如何利用图书馆订购的数据库查询中外学位论文的方法。',
        },
        {
          theme: '网上电子期刊的查阅',
          time: '2019年9月11日 18:30-20:00',
          place: '工学分馆四楼教学培训室',
          speaker: '任丽娟（学科馆员）',
          content: '介绍网上查询中外期刊的方法，并简要介绍中国期刊网、重庆维普和万方数字化期刊系统、Elsevier全文电子期刊数据库等电子期刊全文数据库的使用方法。',
        },
        {
          theme: '专利漫谈',
          time: '2019年9月25日 18:30-20:00',
          place: '工学分馆四楼教学培训室',
          speaker: '江海涛（学科馆员）',
          content: '主要介绍有关专利的基础知识、专利文献检索的主要方法及专利申请等内容。',
        },
        {
          theme: '发表论文的那些事儿',
          time: '2019年9月26日 18:30-20:00',
          place: '信息科学分馆五楼培训室',
          speaker: '江珊（学科馆员）',
          content: '一名认真求学的大学生，在读期间发表2-3篇学术论文是很有必要的。对于打算读研、就业、出国的学生来说，论文的重要性更是不言而喻。然而，相比于大家熟悉的应试模式，发表论文绝对是一个陌生的活儿，本讲座将向你详述一篇优秀学术论文的产生与发表，以及与之相关的方方面面。',
        },
        {
          theme: '新颖性与创造性判断方法、案例分析和课题选题应用',
          time: '2019年10月2日 18:30-20:00',
          place: '信息科学分馆五楼培训室',
          speaker: '廖祥春（学科馆员）',
          content: '专利有三性，名曰新颖性、创造性和实用性。科研选题也有新颖性和创造性要求。某领域现有的一种方法首次应用到另一个领域有新颖性和创造性吗？组合多个现有技术有新颖性和创造性吗......本讲座将有助于科研人员科研选题、专利权利要求撰写和科技查新查新点凝练。',
        },
        {
          theme: 'PubMed数据库使用技能+本地PubMed检索平台（试用数据库）',
          time: '2019年10月12日 18:30-20:00',
          place: '医学分馆电子阅览室',
          speaker: '梅秀文（学科馆员）',
          content: 'PubMed是美国国家医学图书馆(NLM)提供的一个免费信息检索系统,主要提供生物医学方面的论文检索。本讲座主要介绍PubMed数据库常用方法、医学主题词表查询等内容。',
        },
        {
          theme: '学术资源轻松查——图书馆一站式检索工具介绍',
          time: '2019年10月19日 18:30-20:00',
          place: '总馆D栋117培训室',
          speaker: '周露（咨询馆员）',
          content: '还在为查找学术资源发愁吗？图书馆数据库太多感觉无从下手吗？图书馆一站式检索工具助你将学术资源一网打尽！本讲将介绍图书馆首页上的两款检索工具——珞珈学术搜索和百度学术，教你用单一检索框检索所有图书馆资源。',
        },
        {
          theme: 'Web of Science数据库应用',
          time: '2019年10月19日 18:30-20:00',
          place: '医学分馆电子阅览室',
          speaker: '张惠荣（学科馆员）',
          content: '本讲介绍Web of Science数据库使用，实例讲解高水平论文和期刊查找。',
        },
        {
          theme: '法学文献查找实例举要',
          time: '2019年10月24日 18:30-20:00',
          place: '总馆D栋117培训室',
          speaker: '涂文波（学科馆员）',
          content: '在浩瀚的中外法学文献中如何探寻检索的捷径？本讲座以查找法学词语、法律案例、法学论文书刊、专利、法律新闻等为例，介绍法学文献数据库的查找技巧。',
        },
      ],
      [
        {
          theme: 'Excel的几个高级实用技巧',
          time: '2019年10月9日 18:30-20:00',
          place: '信息科学分馆五楼培训室',
          speaker: '肖学斌（学科馆员）',
          content: '小技巧，大作用！本课程将从实用角度出发，介绍Excel的使用技巧，有效帮助您提高运用Excel解决实际问题的能力。',
        },
        {
          theme: '平面设计的那些事儿',
          time: '2019年10月14日 18:30-20:00',
          place: '总馆D栋117培训室',
          speaker: '陈嘉欣（珞珈技术俱乐部设计部副部长）',
          content: '你是否曾经对一张漂亮的海报怦然心动？是否对平面设计心生向往？是否曾有过不少灵感迸发的时刻？这次讲座将带你完成从小白到入门的平面设计进阶，从设计原理，字体配色等多个角度，让你的灵感化为现实！本次讲座主要介绍平面设计的基本原理，包括排版，配色，字体三个主要部分，加上示例具体解读及演示，并简单介绍PS快捷键等小技巧。',
        },
        {
          theme: '学习123D design，轻松3D建模',
          time: '2019年10月16日 18:30-20:00',
          place: '信息科学分馆五楼培训室',
          speaker: '马战胜（学科馆员）',
          content: '3D打印技术应用广泛，引领未来。各个专业的同学都用的到，既可以做专业的设计，还可以作为兴趣爱好。有很多想要学习三维建模的小伙伴们面对复杂的三维建模软件不知从何下手。123D design 软件比较简单，容易上手，没有建模基础也能轻松学会。特别适合文科类、非设计类专业同学学习。90分钟的时间里教会你简单的3D建模。你将会了解到三维建模的乐趣所在！',
        },
        {
          theme: '视频制作快速上手课程：90分钟玩转Premiere',
          time: '2019年10月21日 18:30-20:00',
          place: '总馆D栋117培训室',
          speaker: '田野（校友，芥末影视创始人）',
          content: '小视频时代的到来，你out了吗？拍了很多有爱的照片和视频，但是最后都成了垃圾；受够了被虐的日子，下一个光棍节，想秀他们一脸；实习工作，展示必备。《阿凡达》《蜘蛛侠3》《Gone girl》（消失的爱人），制作神器Premiere90分钟快速上手，这一次，我们只讲干货～让视频变成你手中的乐高玩具，幻化出不一样的精彩！',
        },
        {
          theme: '利用Excel进行数据分析与图表展示',
          time: '2019年11月23日 18:30-20:00',
          place: '信息科学分馆五楼培训室',
          speaker: '黄 山（武汉大学文化创意设计研究中心执行主任 专职研究员）',
          content: '3D打印发展现状与应用领域，常用打印技术及后置处理，不同机型和产品特点，建模思路与常用建模方法以及打印注意事项及模型规范。',
        },
      ],
    ],
    type: 0,
    showModal: false,
    showFalse: false,
    key: -1,
    text: '我们将在培训开始前一小时向您发送推送提醒',
    title: '确定提醒？',
  },
  components: {
    trainingList,
    tipModal,
    falseModal,
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
    onConfirm() {
      this.showModal = false;
      this.result[this.type][this.key].selected = !this.result[this.type][this.key].selected;
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
    onB(key) {
      if (true) {
        this.showFalse = true;
        return;
      }
      if (this.result[this.type][key].selected) {
        this.text = '取消提醒';
        this.title = '';
      } else {
        this.text = '我们将在培训开始前一小时向您发送推送提醒';
        this.title = '确定提醒？';
      }
      this.showModal = true;
      this.key = key;
    },
    onCancel() {
      this.showModal = false;
    },
    onCancelFalse() {
      this.showFalse = false;
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
