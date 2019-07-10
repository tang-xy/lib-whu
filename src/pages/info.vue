<template>
  <div class='info-view'>
    <div class="info-logon">
      <open-data class='avatar' type=userAvatarUrl lang=zh_CN v-if='login'/>
      <image class='avatar' src='https://system.lib.whu.edu.cn/mp-static/320/矢量免扣卡通人物@3x.png' v-if='!login' />
      <view @click="onClick">
        <open-data type=userNickName lang=zh_CN v-if='login'/>
        <div v-if='!login'>点击登录</div>
        <span>{{user.name}}&nbsp;{{user.bor_id}}</span>
      </view>
      <div/>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line" @click="toUnfinished" :disabled='disabled'>
        <image :src=picurl.cardpic mode='aspectFit'/>
        <div>
          <span :class="{ 'list-disabled': !disabled }">&nbsp;电子校园卡</span>
          <image src='https://system.lib.whu.edu.cn/mp-static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
      <div class="info-underscores">
        <view class="divLine"></view>
      </div>
      <div class="info-margin"/>
      <div class="info-line" :disabled='disabled' @click="toFine">
        <image :src=picurl.zhangdanpic mode='aspectFit'/>
        <div>
          <span :class="{ 'list-disabled': !disabled }">&nbsp;图书馆账单</span>
          <image src='https://system.lib.whu.edu.cn/mp-static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line" @click="toBorrow">
        <image :src=picurl.jieyuepic mode='aspectFit'/>
        <div>
          <span :class="{ 'list-disabled': !disabled }">&nbsp;借阅信息</span>
          <image src='https://system.lib.whu.edu.cn/mp-static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
      <div class="info-underscores">
        <view class="divLine"></view>
      </div>
      <div class="info-margin"/>
      <div class="info-line" :disabled='disabled' @click="toHistory">
        <image :src=picurl.lishipic mode='aspectFit'/>
        <div>
          <span :class="{ 'list-disabled': !disabled }">&nbsp;借阅历史</span>
          <image src='https://system.lib.whu.edu.cn/mp-static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
      <div class="info-underscores">
        <view class="divLine"></view>
      </div>
      <div class="info-margin"/>
      <div class="info-line" :disabled='disabled' @click="toReserve">
        <image :src=picurl.yuyuepic mode='aspectFit'/>
        <div>
          <span :class="{ 'list-disabled': !disabled }">&nbsp;预约结果</span>
          <image src='https://system.lib.whu.edu.cn/mp-static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
      <div class="info-underscores">
        <view class="divLine"></view>
      </div>
      <div class="info-margin"/>
      <div class="info-line" :disabled='disabled' @click="toEntry">
        <image :src=picurl.ruguanpic mode='aspectFit'/>
        <div>
          <span :class="{ 'list-disabled': !disabled }">&nbsp;入馆记录</span>
          <image src='https://system.lib.whu.edu.cn/mp-static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line" :disabled='disabled' @click="toUnfinished">
        <image :src=picurl.ziyuanpic mode='aspectFit'/>
        <div>
          <span :class="{ 'list-disabled': !disabled }">&nbsp;资源荐购</span>
          <image src='https://system.lib.whu.edu.cn/mp-static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line" @click="toSuggest" :disabled='disabled'>
        <image :src=picurl.jianyipic mode='aspectFit'/>
        <div>
          <span >&nbsp;建议与反馈</span>
          <image src='https://system.lib.whu.edu.cn/mp-static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
    <div class="info-margin"/>
    <div class="info-list" v-if="disabled" >
      <div class="info-margin"/>
        <div class="info-bind" @click="onLogin">
          <span>{{text}}</span>
        </div>
      </div>
      <div class="info-margin">
      </div>
      <tip-modal :showModal="showModal" text='解除绑定后将无法使用座位预约、借阅信息查询等功能，重新绑定即可查看' title='确定解绑？' @confirm=onConfirm @cancel=onCancel />
  </div>
</template>

<script>
import tipModal from '../components/modal/tipModal';

export default {
  mpType: 'page',
  components: {
    tipModal,
  },
  onShareAppMessage() {
    return {
      title: '武汉大学图书馆',
    };
  },
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
        ruguanpic: 'zanwucanyujilu@2x.png',
      },
      picurl: {
        cardpic: 'https://system.lib.whu.edu.cn/mp-static/320/卡 (1)@3x.png',
        zhangdanpic: 'https://system.lib.whu.edu.cn/mp-static/320/账单 (1)@3x.png',
        jieyuepic: 'https://system.lib.whu.edu.cn/mp-static/320/书 (4)@3x.png',
        lishipic: 'https://system.lib.whu.edu.cn/mp-static/320/历史 (1)@3x.png',
        yuyuepic: 'https://system.lib.whu.edu.cn/mp-static/320/预约 (1)@3x.png',
        ziyuanpic: 'https://system.lib.whu.edu.cn/mp-static/320/购物车@3x.png',
        jianyipic: 'https://system.lib.whu.edu.cn/mp-static/320/建议 (1)@3x.png',
      },
      showModal: false,
      disabled: false,
      text: '点击绑定',
      user: {
        name: '点击登录',
        id: '登录更精彩',
        pic: 'https://system.lib.whu.edu.cn/mp-static/320/矢量免扣卡通人物@3x.png',
      },
    };
  },
  onShow() {
    const t = this;
    let baseurl = '';
    if (t.$store.getters.getLibBind) {
      baseurl = 'https://system.lib.whu.edu.cn/mp-static/330/';
      t.disabled = true;
      t.text = '解除绑定';
      t.user = t.$store.getters.getLibUser;
    } else {
      baseurl = 'https://system.lib.whu.edu.cn/mp-static/320/';
      t.disabled = false;
      t.text = '点击绑定';
      if (this.login) t.user = { name: '点击绑定' };
      else t.user = { name: '登录更精彩' };
    }
    const a = {};
    Object.keys(t.piclist).forEach((key) => {
      a[key] = baseurl + t.piclist[key];
    });
    t.picurl = a;
  },
  computed: {
    login() {
      return this.$store.getters.getLogin;
    },
  },
  onUnload() {
    this.showModal = false;
  },
  methods: {
    onClick() {
      if (this.disabled) {
        const url = '/pages/information';
        wx.navigateTo({ url });
      } else {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
      }
    },
    onConfirm() {
      this.showModal = false;
      const that = this;
      that.$store.dispatch('unbindLibAccount', { session: that.$store.getters.getSession });
      that.disabled = false;
      const url = '/pages/login';
      wx.navigateTo({ url });
    },
    onCancel() {
      this.showModal = false;
    },
    onLogin() {
      this.showModal = true;
    },
    toReserve() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = 'borrow/reserve';
      wx.navigateTo({ url });
    },
    toHistory() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = 'borrow/history';
      wx.navigateTo({ url });
    },
    toEntry() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = '/pages/entry';
      wx.navigateTo({ url });
    },
    toFine() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = '/pages/fine/fine';
      wx.navigateTo({ url });
    },
    toCard() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = '/pages/card';
      wx.navigateTo({ url });
    },
    toBorrow() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = '/pages/borrow';
      wx.navigateTo({ url });
    },
    toSuggest() {
      const url = '/pages/suggest';
      wx.navigateTo({ url });
    },
    toUnfinished() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = '/pages/unfinished';
      wx.navigateTo({ url });
    },
  },
};
</script>

<style lang="scss" scoped>
.info-view{
  width: 100%;
  height: 100vh;
  background-color: #f7f7f7;
  .info-bind{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    height: 92rpx;
    span{
      display: flex;
    }
  }
  .info-logon{
    background-color: #ffffff;
    width: 100%;
    height: 248rpx;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-flex-direction: row;
    flex-direction: row;
    .avatar{
      margin-left: 33rpx;
      margin-top: 54rpx;
      width: 150rpx;
      height: 150rpx;
    }
    view{
      width: 50%;
      height: 152rpx;
      padding-top: 96rpx;
      padding-left: 24rpx;
      background-color: #ffffff;
      font-size: 43rpx;
      color: #393939;
      display: flex;
      flex-direction: column;
      div{
        padding: 0;
        width: 178rpx;
        font-size: 43rpx;
        height: 62rpx;;
      }
      span{
        margin-left: 2rpx;
        font-size: 30rpx;
        color: #777777;
      }
    }
    div{
      width: 0%;
    }
  }
  .info-margin{
    height: 13rpx;
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
    height: 87rpx;
    background-color: #ffffff;
    -webkit-flex-direction: column;
    image{
      margin-top:21rpx;
      margin-left: 36rpx;
      width: 54rpx;
      height: 54rpx;
      align-items: left;
      justify-content: left;
    }
    div{
      width: 660rpx;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      span{
        padding-top:20rpx;
        font-size: 31rpx;
        width: 600rpx;
      }
      span:disabled{
        color: #ABABAB;
      }
      span:enabled{
        color: #000;
      }
      image{
        margin-top:20rpx;
        margin-left: 0;
        width: 15rpx;
        height: 27rpx;
        align-items: right;
        justify-content: right;
      }
    }
  }
}
.list-disabled{
  color: #ABABAB;
}
</style>

