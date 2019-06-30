<template>
  <div class='container'>
    <image class='bk' src='https://system.lib.whu.edu.cn/mp-static/340/上方@3x.png' mode='aspectFill' :style="{ height: picHeight}" />
    <button v-if=login type='default' open-type='getUserInfo' @getuserinfo='getUserInfo' @click='wxlogin'>
      <span>微信快速登录</span>
      <image src='https://system.lib.whu.edu.cn/mp-static/340/矩形 5@3x.png' mode='scaleToFill'/>
    </button>
    <div class='bind-container' v-if=!login>
      <div class='input-container'>
        <image src='https://system.lib.whu.edu.cn/mp-static/340/证件@3x.png' style='width:3.5vh; height:2.5vh;'/>
        <span>&nbsp;学&nbsp;&nbsp;号&nbsp;</span>
        <input class='un-input' type='number' placeholder='请输入学号或学工号' @input=inputUsername confirm-type='next' @focus=onFocus />
      </div>
      <div class='input-container' style='top: 10vh;'>
        <image src='https://system.lib.whu.edu.cn/mp-static/340/密码@3x.png' style='width:3.5vh; height:3.5vh;'/>
        <span>&nbsp;密&nbsp;&nbsp;码&nbsp;</span>
        <input class='pw-input' type='text' placeholder='请输入密码' @input=inputPassword password=true/>
      </div>
      <button id='bind' type='default' @click='bind'>
        <span>绑&nbsp;&nbsp;&nbsp;&nbsp;定</span>
        <image src='https://system.lib.whu.edu.cn/mp-static/340/矩形 5@3x.png' mode='scaleToFill'/>
      </button>
      <button id='exit' type='default' @click='exit'>
        <span>以后再说</span>
        <image src='https://system.lib.whu.edu.cn/mp-static/340/矩形 5 副本@3x.png' mode='scaleToFill'/>
      </button>
    </div>
  </div>
</template>

<script>
import JSEncrypt from 'jsencrypt';

export default {
  mpType: 'page',
  data: {
    login: true,
    userName: '',
    password: '',
    code: '',
  },
  computed: {
    picHeight() {
      return this.login ? '165vw' : '120vw';
    },
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '账号登录',
    });
    const { type } = options;
    if (type === 'login') {
      this.login = true;
      wx.setNavigationBarTitle({ title: '登录' });
      this.wxlogin();
    } else {
      this.login = false;
      wx.setNavigationBarTitle({ title: '绑定图书馆账号' });
    }
  },
  methods: {
    onFocus() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300,
      });
    },
    wxlogin() {
      const that = this;
      wx.login({
        success(res) {
          that.code = res.code;
        },
      });
    },
    bind() {
      if (this.userName === '' || this.password === '') {
        wx.showToast({ title: '学号/密码不能为空', icon: 'none' });
      } else {
        this.$store.dispatch('bindLibAccount', { session: this.$store.getters.getSession, libId: this.userName, libPsw: this.password });
      }
    },
    getUserInfo(e) {
      if (e.mp.detail.userInfo) {
        wx.showLoading({ title: '登录中...' });
        const { encryptedData, userInfo, iv } = e.mp.detail;
        this.$store.dispatch('wechatLogin', {
          code: this.code,
          encryptedData,
          iv,
          userInfo,
        });
        if (this.$store.getters.getLibBind) {
          wx.navigateBack({ delta: 1 });
        } else {
          this.login = false;
        }
      }
    },
    exit() {
      wx.navigateBack({ delta: 1 });
    },
    inputUsername(e) {
      this.userName = e.mp.detail.value;
    },
    inputPassword(e) {
      const encrypt = new JSEncrypt();
      const PUB_KEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMRWy62srQJhljxzaxbSjbl6R3
bA4dXTEdVhcSB7ZDM54axZFmikmOdiAZ7kD4xdRysdp1P+vRjBIWMFJeyYN8v/p+
NqJT8o2Y8nJdmBTX7e0JkwIiEgSORlXai+eR3e8eBOtBQ8EUwSSi0bgkLOkOTQ7/
CPDsDJ7vp7Q2+WLvlQIDAQAB
-----END PUBLIC KEY-----`;
      encrypt.setPublicKey(PUB_KEY);
      console.log(encrypt.encrypt(e.mp.detail.value));
      this.password = encrypt.encrypt(e.mp.detail.value);
    },
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0%;
  background: #f7f7f7;
  .bk{
    position: absolute;
    top: -35vw;
    width: 100vw;
    height: 160vw;
  }
  button{
    position: absolute;
    bottom: 10vh;
    width: 90vw;
    height: 8vh;
    padding: 0%;
    border: none;
    border-radius: 0px;
    image{
      width: 100%;
      height: 100%;
    }
    span{
      position: absolute;
      left: 30vw;
      top: 1vh;
      background-color: transparent;
      color: white;
    }
  }
  .bind-container{
    position: absolute;
    width: 100vw;
    height: 50vh;
    bottom: 0px;
    display: flex;
    justify-content: center;
    .input-container{
      width: 100vw;
      display: flex;
      position: absolute;
      top: 0px;
      height: 8vh;
      justify-content: center;
      align-content: center;
      font-size: 30rpx;
      image{
        margin-top: 5%;
      }
      span{
        margin-top: 5%;
      }
      input{
        height: 72rpx;
        font-size: 24rpx;
        padding-left: 13rpx;
        padding-top: 3rpx;
        border-style: solid;
        border-width: 1px;
        border-color: grey;
        justify-content: center;
        align-content: center;
        align-self:center;
        justify-self:center;
        width: 490rpx;
      }
    }
    #bind{
      bottom: 20vh;
      span{
        left: 35vw;
      }
    }
    #exit{
      span{
        color: black;
        left: 34vw;
      }
    }
  }
}

</style>
