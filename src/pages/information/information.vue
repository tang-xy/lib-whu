<template>
  <div class='card'>
      <image class="background" src='https://system.lib.whu.edu.cn/mp-static/331/上方@3x.png'>
        <div class="title">
          <span>信息更新</span>
        </div>
        <div class="table">
            <div class="line">
                <image src='https://system.lib.whu.edu.cn/mp-static/331/姓名@3x.png'/>
                <span>真实姓名:</span>
                <div>
                    <input type='text' @input='inputName' :value="userName" disabled/>
                    <div/>
                </div>
            </div>
            <div class="line">
                <image src='https://system.lib.whu.edu.cn/mp-static/331/博士帽@3x.png'/>
                <span>专业:</span>
                <div>
                    <input type='text' @input="inputMajor" :value="major" />
                    <div/>
                </div>
            </div>
            <div class="line">
                <image src='https://system.lib.whu.edu.cn/mp-static/331/电话@3x.png'/>
                <span>联系电话:</span>
                <div>
                    <input type='number' @input="inputTel" :value="tel"/>
                    <div/>
                </div>
            </div>
            <div class="line">
                <image src='https://system.lib.whu.edu.cn/mp-static/331/邮箱@3x.png'/>
                <span>邮箱:</span>
                <div>
                    <input type='text' @input="inputEmail" :value="email"/>
                    <div/>
                </div>
            </div>
        </div>
        <button class="update" @click="onUpdate">
            <span>
                确认更新
            </span>
        </button>
      </image>
  </div>
</template>

<script>
import { getBorInfo } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '个人信息',
    });
    const that = this;
    getBorInfo({
      session: that.$store.getters.getSession,
    }).then((response) => {
      that.userName = response.result.name;
      that.major = response.result.prof;
      that.tel = response.result.telephone;
      that.email = response.result.email;
    });
  },
  data: {
    userName: '',
    major: '',
    tel: '',
    email: '',
  },
  methods: {
    onUpdate() {
      if (this.userName === '' || this.major === '' || this.tel === '' || this.email === '') {
        wx.showToast({ title: '信息不能为空', icon: 'none' });
      } else {
        wx.showToast({
          title: '抱歉，暂时无法更新信息',
        });
      }
    },
    inputName(e) {
      this.userName = e.mp.detail.value;
    },
    inputMajor(e) {
      this.major = e.mp.detail.value;
    },
    inputTel(e) {
      this.tel = e.mp.detail.value;
    },
    inputEmail(e) {
      this.email = e.mp.detail.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.card{
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  .background{
    width: 100vw;
    height: 100vh;
    z-index: 11;
    position: relative;
    .title{
        width: 30vw;
        height: 4vh;
        position: absolute;
        left: 60vw;
        top: -78vh;
        right: 0;
        bottom: 0;
        margin: auto;
        text-align: right;
        span{
            color: #ffffff;
            font-size: 40rpx;
        }
    }
    .table{
        margin: auto;
        position: absolute;
        left: 2vw;
        right: 2vw;
        top: 17vh;
        width: 92vw;
        height: 36vh;
        padding: 15rpx;
        background-color: #ffffff;
        .line{
            width: 96%;
            margin: 2%;
            height: 8vh;
            display: flex;
            justify-content: left;
            align-items: center;
            image{
                width: 80rpx;
                height: 57rpx;
                margin: 20rpx;
            }
            span{
                width: 40vw;
                height: 57rpx;
                margin: 20rpx;
                font-size: 40rpx;
                color: #525252;
            }

            div{
                width: 40vw;
                height: 57rpx;
                margin: 20rpx;
                input{
                    width: 40vw;
                    height: 55rpx;
                    font-size: 40rpx;
                }
                div{
                    background: #777777;
                    height: 2rpx;
                    width: 40vw;
                    margin: 0;
                }
            }
        }
    }
    .update{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        position: absolute;
        left: 2vw;
        right: 2vw;
        top: 56vh;
        width: 96vw;
        height: 9vh;
        padding: 15rpx;
        background-color: #82ABE4;
        span{
            color:#ffffff;
        }
    }
  }
}
</style>
