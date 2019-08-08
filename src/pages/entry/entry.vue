<template>
  <div class='entry-page'>
      <div class="entry-visit">
        <div class="entry-username">{{username}}</div>
        <div class="entry-username-text">的入馆记录</div>
        <div class="entry-count">{{result['visit-count']}}</div>
        <div class="entry-count-text">总次数</div>
      </div>
      <div class="margin"/>
      <div class="entry-info">
          <div class="entry-line">
            <div class="gra">
                <div class='circle'/>
                <div class='line'/>
            </div>
            <div class="text">
                <div class="line-title">最新入馆记录</div>
                <div class="line-text">{{result['last-visit-time']}}&nbsp;&nbsp;&nbsp;{{result['last-visit-branch']}}</div>
            </div>
          </div>
          <div class="entry-line">
            <div class="gra">
                <div class='circle'/>
                <div class='line'/>
            </div>
            <div class="text">
                <div class="line-title">首次入馆记录</div>
                <div class="line-text">{{result['fist-visit-time']}}&nbsp;&nbsp;&nbsp;</div>
            </div>
          </div>
          <div class="entry-line">
            <div class="gra">
                <div class='circle'/>
                <div class='line'/>
            </div>
            <div class="text">
                <div class="line-title">最爱去的分馆</div>
                <div class="line-canvas">
                    <canvas canvas-id='canvas'/>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { getVisitInfo } from '../../api';


export default {
  mpType: 'page',
  components: {
  },
  onShareAppMessage() {
    return {
      title: '武汉大学图书馆',
    };
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '入馆记录',
    });
    const that = this;
    wx.showLoading({ title: '加载中...' });
    this.username = this.$store.getters.getLibUser.name;
    getVisitInfo({
      session: that.$store.getters.getSession,
    }).then((response) => {
      that.result = response.result;
      that.result['fist-visit-time'] = that.result['fist-visit-time'].slice(0, 19);
      that.result['last-visit-time'] = that.result['last-visit-time'].slice(0, 19);
      const ctx = wx.createCanvasContext('canvas');
      that.drawPie(ctx);
      wx.hideLoading();
    });
    that.rpxToPx = wx.getSystemInfoSync().windowWidth / 750;
  },
  data() {
    return {
      username: '',
      result: {},
      rpxToPx: 0,
    };
  },
  methods: {
    drawPie(ctx) {
      const tmp = Number(this.result['most-branch-count']) / (this.result['visit-count']);
      const moveX = 20 * Math.cos((1 - tmp) * Math.PI);
      const moveY = 20 * Math.sin((1 - tmp) * Math.PI);
      const afterX = moveX + 178;
      const afterY = 178 - moveY;
      const d = 2 * tmp * Math.PI;
      ctx.setFontSize(30 * this.rpxToPx);
      ctx.beginPath();
      ctx.arc(178 * this.rpxToPx, 178 * this.rpxToPx, 178 * this.rpxToPx, 0, d);
      ctx.lineTo(178 * this.rpxToPx, 178 * this.rpxToPx);
      ctx.setFillStyle('#4B88DD');
      ctx.fill();
      ctx.setFillStyle('#ffffff');
      ctx.fillText(this.result['most-branch-name'], 79 * this.rpxToPx, 236 * this.rpxToPx);
      ctx.fillText(`  ${(100 * tmp).toFixed(0)}%`, 79 * this.rpxToPx, 266 * this.rpxToPx);
      ctx.setFillStyle('#E0EFFF');
      ctx.beginPath();
      ctx.arc(afterX * this.rpxToPx, afterY * this.rpxToPx, 178 * this.rpxToPx, 0, d, true);
      ctx.lineTo(afterX * this.rpxToPx, afterY * this.rpxToPx);
      ctx.fill();
      ctx.setFillStyle('#4B88DD');
      ctx.fillText('其他', 236 * this.rpxToPx, 106 * this.rpxToPx);
      ctx.draw();
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-page{
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  padding: 0%;
  height: 100vh;
}
.entry-visit{
    height: 293rpx;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    -webkit-flex-direction: row;
    flex-direction: row;
    .entry-username{
        display: flex;
        margin-top: 23rpx;
        margin-left: 54rpx;
        font-size: 36rpx;
        color: #3a3a3a;
    }
    .entry-username-text{
        display: flex;
        margin-top: 37rpx;
        margin-left: 10rpx;
        font-size: 24rpx;
        color: #3a3a3a;
    }
    .entry-count{
        width: 750rpx;
        text-align: center;
        padding-top: 50rpx;
        font-size: 72rpx;
        color: #5888d7;
    }
    .entry-count-text{
        width: 750rpx;
        text-align: center;
        font-size: 30rpx;
        color: #525252;
    }
}
.entry-info{
    height: 1019rpx;
    width: 750rpx;
    padding-top: 108rpx;
    padding-left: 61rpx;
    .entry-line{
        padding-top: 5rpx;
        display: flex;
        margin: auto;
        flex-wrap: wrap;
        -webkit-flex-direction: row;
        flex-direction: row;
        .text{
            .line-title{
                padding-left: 28rpx;
                font-size: 30rpx;
                color: #5888d7;
                font-family: PingFangSC-Medium;
                font-weight: 700;
            }
            .line-text{
                padding-left: 28rpx;
                padding-top: 33rpx;
                height:27rpx;
                font-size:28rpx;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(113,113,113,1);
                line-height:36rpx;
            }
            .line-canvas{
                padding-left: 138rpx;
                padding-top: 33rpx;
                canvas{
                    width: 356rpx;
                    height: 356rpx;
                }
            }
        }
        .gra{
            .line{
            width: 1rpx;
            height: 162rpx;
            padding-left: 10rpx;
            border-right-style: solid;
            border-color: #7aa6e2;
            border-width: 5rpx;
            opacity: 0.7;
            }
            .circle{
            width:28rpx;
            height:28rpx;
            background:rgba(130,166,221,1);
            border-radius:50%;
            margin-top: 4rpx;
            }
        }

    }
}
.margin{
    height: 23rpx;
    background-color: #F7F7F7;
}
</style>
