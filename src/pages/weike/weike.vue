<template>
  <div class='weike-view'>
    <scroll-view
    class='scroll-list'
    scroll-x=true>
      <div class="list-type">
        <div class='list-choice' v-for='(item, index) in result' :key=index @click=onClick(index) :class="{ 'list-choice-selected': (index===type) }">
          {{item.title}}
        </div>
      </div>
    </scroll-view>
    <scroll-view
    class='video'
    scroll-y=true>
      <div class="card" v-for='(item, index) in videodata[type]' :key=index>
        <txv-video class="txv" :vid="item.src" :playerid="item.src"></txv-video>
        <div class="title">{{item.title}}</div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
const txvContext = requirePlugin('tencentvideo');

export default {
  mpType: 'page',
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '小布微课',
    });
    // this.txvContext = txvContext.getTxvContext('txv1');
  },
  onUnload() {
    this.type = 0;
  },
  config: {
    usingComponents: {
      'txv-video': 'plugin://tencentvideo/video',
    },
  },
  data: {
    type: 0,
    videodata: [
      [
        {
          src: 'm0308eoirpt',
          title: '参考文献类型识别——图书',
        },
        {
          src: 'i0308eulapn',
          title: '参考文献类型识别——期刊',
        },
        {
          src: 'h0312fswsoh',
          title: '截词检索',
        },
        {
          src: 'l0312lbe87r',
          title: '布尔逻辑检索',
        },
        {
          src: 'k0312k5mtiu',
          title: '词组检索',
        },
        {
          src: 'x0352bz7q3g',
          title: '小信同学说检索之检索词的选择（上）',
        },
        {
          src: 'a0352l3yo8g',
          title: '小信同学说检索之检索词的选择（下）',
        },
      ],
      [
        {
          src: 'f0307mvxa6f',
          title: '古籍不止泛黄的书页—电子版古籍之中国基本古籍库的使用',
        },
        {
          src: 'b0307si3yip',
          title: '利用馆藏系统查找书刊',
        },
        {
          src: 'x0307bo4gu1',
          title: '揭开Elsevier的面纱',
        },
        {
          src: 'e03073qn96p',
          title: '开世览文（CASHL--中国高校人文社会科学文献中心）概况',
        },
        {
          src: 'j0307ortym0',
          title: '查找法律文献方法',
        },
        {
          src: 'z0352b7ds5b',
          title: 'WOS高级检索技巧',
        },
        {
          src: 'j035252p9xl',
          title: '随书光盘使用方法',
        },
        {
          src: 'w0352qd9sva',
          title: '正保多媒体数据库使用方法',
        },
        {
          src: 's0352hhpnwp',
          title: '数据库使用一点通',
        },
      ],
      [
        {
          src: 'd0308e3lhh0',
          title: '微探古籍修复',
        },
        {
          src: 's0312ljx92y',
          title: '图书通借预约流程简介',
        },
        {
          src: 'i0312scy9hb',
          title: '“疯狂”图书馆 ——如何利用自助设备借还书？',
        },
        {
          src: 'w0307o83pci',
          title: '如何预约研修室',
        },
        {
          src: 'c031293wsu0',
          title: '教您使用存包柜',
        },
        {
          src: 'd0307jt7gct',
          title: '如何提交博硕士学位论文',
        },
        {
          src: 'b0313ly3to7',
          title: '文献传递服务使用指南Ⅰ',
        },
        {
          src: 'o0639pwzhw4',
          title: '文献传递服务使用指南II',
        },
        {
          src: 'g03077du5u5',
          title: '失物招领与寻物启事',
        },
        {
          src: 't03109lqkuo',
          title: '3D打印机使用指南',
        },
        {
          src: 'i030745cp0h',
          title: '缩微阅读机使用指南',
        },
        {
          src: 'g0308ghb28h',
          title: '移动图书馆&电子书借阅机使用指南',
        },
        {
          src: 'k0367keyajs',
          title: '总馆期刊阅览室掠影',
        },
        {
          src: 'a0307486qri',
          title: '工学分馆掠影',
        },
        {
          src: 'v0312nfvmn9',
          title: '医学分馆--梦想开始的地方',
        },
        {
          src: 'u0352hyemv2',
          title: '珞珈文脉--武汉大学文库简介',
        },
        {
          src: 'p0352is9e9e',
          title: '查收查引--如何在线提交论文查收查引委托申请',
        },
      ],
      [
        {
          src: 'x0327iz7ltq',
          title: '学术不端行为界定（上）',
        },
        {
          src: 'w0327kr6gln',
          title: '学术不端行为界定（下）',
        },
        {
          src: 'w0313wxcdo5',
          title: '参考文献著录规范',
        },
        {
          src: 'd0352pc8grq',
          title: '论文写作规范(上)-形式篇',
        },
        {
          src: 'p0352ss1bau',
          title: '论文写作规范(下）-内容篇',
        },
      ],
      [
        {
          src: 'o0307akkxt1',
          title: '校园网外如何使用电子资源',
        },
        {
          src: 'b0355edavqo',
          title: '光与影中的图书馆',
        },
      ],
    ],
    result: [
      {
        title: '信息素养',
      },
      {
        title: '资源查找与利用',
      },
      {
        title: '馆舍&服务',
      },
      {
        title: '学术道德与规范',
      },
      {
        title: '其他',
      },
    ],
  },
  methods: {
    toUnfinished() {
      const url = '/pages/unfinished';
      wx.navigateTo({ url });
    },
    onClick(index) {
      this.type = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.weike-view{
  display: block;
  padding-top: 48rpx;
  background-color: #ffffff;
  width: auto;
  .scroll-list{
    display: flex;
    .list-type{
    display: flex;
    border-bottom-color: #d0d0d0;
    border-bottom-style: solid;
    border-bottom-width: 2rpx;
    border-radius: 0;
    width: 150vw;
    .list-choice{
      width: auto;
      display: flex;
      // position: static;
      color: #4f4f4f;
      font-size:29rpx;
      font-family:MicrosoftYaHei;
      border: none;
      border-radius: 0;
      height: 51rpx;
      padding-left: 25rpx;
      padding-right: 28rpx;
    }
    .list-choice::after{
      border: none;
    }
    .list-choice-selected{
      border-bottom-color: #5888d7;
      border-bottom-style: solid;
      border-radius: 0;
    }
  }
  }
  .video{
    height: 85vh;
    width: 100%;
    .card{
      margin-left: 38rpx;
      margin-top: 23rpx;
      width: 671rpx;
      .txv{
        width: 100%;
        height: 347rpx;
        margin-bottom: 31rpx;
        display: flex;
      }
      .title{
        font-size:30rpx;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(79,79,79,1);
        line-height:36rpx;
        display: flex;
        margin-top: 31rpx;
        width: 488rpx;
      }
    }
  }
}
</style>
