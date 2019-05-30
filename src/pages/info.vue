<template>
  <div class='info-view'>
    <div class="info-logon">
      <image :src="user.pic"/>
      <view @click="onClick">{{user.name}}
        <span>&nbsp;{{user.id}}</span>
      </view>
      <div/>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=picurl.cardpic mode='aspectFit'/>
        <div>
          <span>&nbsp;电子校园卡</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
      <div class="info-underscores">
        <view class="divLine"></view>
      </div>
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=picurl.zhangdanpic mode='aspectFit'/>
        <div>
          <span>&nbsp;图书馆账单</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=picurl.jieyuepic mode='aspectFit'/>
        <div>
          <span>&nbsp;借阅信息</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
      <div class="info-underscores">
        <view class="divLine"></view>
      </div>
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=picurl.lishipic mode='aspectFit'/>
        <div>
          <span>&nbsp;借阅历史</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
      <div class="info-underscores">
        <view class="divLine"></view>
      </div>
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=picurl.yuyuepic mode='aspectFit'/>
        <div>
          <span>&nbsp;预约结果</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=picurl.ziyuanpic mode='aspectFit'/>
        <div>
          <span>&nbsp;资源导购</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=picurl.jianyipic mode='aspectFit'/>
        <div>
          <span>&nbsp;建议与反馈</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
        <div class="info-bind" @click="onLogin">
          <span>{{text}}</span>
        </div>
      </div>
      <div class="info-margin">
      </div>
  </div>
</template>

<script>
export default {
  mpType: 'page',
  data() {
    return {
      piclist: {
        cardpic: '卡 (1)@3x.png',
        zhangdanpic: '账单 (1)@3x.png',
        jieyuepic: '书 (4)@3x.png',
        lishipic: '历史 (1)@3x.png',
        yuyuepic: '预约 (1)@3x.png',
        ziyuanpic: '购物车@3x.png',
        jianyipic: '建议 (1)@3x.png',
      },
      picurl: {
        cardpic: '/static/320/卡 (1)@3x.png',
        zhangdanpic: '/static/320/账单 (1)@3x.png',
        jieyuepic: '/static/320/书 (4)@3x.png',
        lishipic: '/static/320/历史 (1)@3x.png',
        yuyuepic: '/static/320/预约 (1)@3x.png',
        ziyuanpic: '/static/320/购物车@3x.png',
        jianyipic: '/static/320/建议 (1)@3x.png',
      },
      disabled: false,
      text: '点击绑定',
      user: {
        name: '点击登录',
        id: '登录更精彩',
        pic: '/static/320/矢量免扣卡通人物@3x.png',
      },
    };
  },
  onShow() {
    const t = this;
    let baseurl = '';
    if (t.$store.getters.getLibBind && t.$store.getters.getLogin) {
      baseurl = '/static/330/';
      t.disabled = true;
      t.text = '解除绑定';
      t.user = Object({
        name: '李安国',
        id: '2017*****007',
        pic: '/static/330/图层 1@3x.png',
      });
    } else {
      baseurl = '/static/320/';
      t.disabled = false;
      t.text = '点击绑定';
    }
    /* if (t.data === undefined) {i
      return;
    } */
    const a = {};
    Object.keys(t.piclist).forEach((key) => {
      a[key] = baseurl + t.piclist[key];
    });
    t.picurl = a;
  },
  computed: {
  },
  methods: {
    onClick() {
      const url = '/pages/login';
      wx.navigateTo({ url });
    },
    onLogin() {
      wx.showModal({
        title: '确定解绑？',
        content: '解除绑定后将无法使用座位预约、借阅信息查询等功能，重新绑定即可查看',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.info-view{
  width: 100%;
  height: 96vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  background-color: #f7f7f7;
  .info-image{
    width: 96vw;
    height: 27vh;
    padding-bottom: 2vh;
    image{
      width: 100%;
      height: 100%;
    }
  }
  .info-bind{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    span{
      display: flex;
    }
  }
  .info-logon{
    background-color: #ffffff;
    width: 100%;
    height: 25vh;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-flex-direction: row;
    flex-direction: row;
    image{
      padding-left: 5%;
      padding-top: 5vh;
      width: 25%;
      height: 18vh;
    }
    view{
      width: 30%;
      height: 10vh;
      padding-top: 8.3vh;
      background-color: #ffffff;
      font-size: 45rpx;
      span{
        font-size: 34rpx;
        color: #777777;
      }
    }
    div{
      width: 0%;
    }
  }
  .info-margin{
    height: 1.5vh;
  }
  .info-underscores{
    height: 1vh;
    padding-left: 10%;
    width: 90%;
    .divLine{
      background: #e9e9e9;
      height: 0.2vh;
    }
  }
  .info-list{
    background-color: #ffffff;
    width: 100%;
  }
  .info-line{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    height: 5vh;
    background-color: #ffffff;
    -webkit-flex-direction: column;
    image{
      padding-top:2.5%;
      width: 15%;
      height: 90%;
      align-items: left;
      justify-content: left;
    }
    div{
      width: 80%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      span{
        padding-top:1.25vh;
        font-size: 0.9;
        width: 95%;
      }
      span:disabled{
        color: #ABABAB;
      }
      span:enabled{
        color: #000;
      }
      image{
        padding-top:1.5vh;
        width: 5%;
        height: 60%;
        align-items: right;
        justify-content: right;
      }
    }
  }
}
</style>

