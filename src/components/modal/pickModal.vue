<template>
    <div>
        <view class="modal-mask" bindtap="hideModal" catchtouchmove="preventTouchMove" v-if="showModal"></view>
        <view class="modal-dialog" v-if="showModal" >
            <view class="modal-title">请选择取书地</view>
            <div class="modal-iconlist">
            <div class="modal-icon"
             v-for='(item, index) in pick'
             :key=index
             :class="{ 'selected': item.index===selected, 'tmp': item.index===0}"
             @click=onClickModal(item.index) >
                <image :src="picurl[item.index].url" mode='aspectFit'>
                    <div>{{item.name}}</div>
                </image>
            </div>
            </div>
            <view class="modal-text">{{text}}</view>
            <view class="modal-content">
            </view>
            <view class="modal-footer">
                <view class="btn-confirm" @click=onConfirm data-status="confirm">确定预约</view>
            </view>
        </view>
        <div class="modal-cancel" v-if="showModal" @click=onCancel >
                <image src='https://system.lib.whu.edu.cn/mp-static/113/关  闭@2x.png' mode='aspectFit'/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PickModal',
  props: {
    showModal: {
      type: Boolean,
      required: true,
      default: false,
    },
    text: {
      type: String,
      required: true,
      default: '',
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    selected: {
      type: Number,
      required: true,
      default: 0,
    },
    pick: {
      type: Array,
      required: false,
      default: [
        {
          code: 'WL',
          index: 0,
          name: '总馆',
        },
        {
          code: 'GX',
          index: 1,
          name: '工学分馆',
        },
        {
          code: 'XX',
          index: 2,
          name: '信息分馆',
        },
        {
          code: 'YX',
          index: 3,
          name: '医学分馆',
        },
      ],
    },
  },
  computed: {
    picurl() {
      return this.pick.map((e) => {
        const tmp = e;
        if (tmp.index === this.selected) tmp.url = 'https://system.lib.whu.edu.cn/mp-static/115/椭圆 10 拷贝 4@2x.png';
        else tmp.url = 'https://system.lib.whu.edu.cn/mp-static/114/椭圆 10 拷贝 4@2x.png';
        return tmp;
      });
    },
  },
  methods: {
    showDialogBtn() {
      this.showModal = true;
    },
    onClickModal(key) {
      this.selected = key;
    },
    preventTouchMove() {
    },
    hideModal() {
      this.showModal = false;
    },
    selectedsrc(select) {
      if (select) return 'https://system.lib.whu.edu.cn/mp-static/115/椭圆 10 拷贝 4@2x.png';
      return 'https://system.lib.whu.edu.cn/mp-static/114/椭圆 10 拷贝 4@2x.png';
    },
    onCancel() {
      this.$emit('cancel');
      this.hideModal();
    },
    onConfirm() {
      this.$emit('confirm', this.selected);
      this.hideModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.show-btn {
  margin-top: 100rpx;
  color: #22cc22;
}
.modal-iconlist{
    display: flex;
}
.modal-icon{
    margin-left: 24rpx;
    margin-top: 63rpx;
    width: 136rpx;
    height: 136rpx;
    display: flex;
    flex-wrap: wrap;
    -webkit-flex-direction: columns;
    flex-direction: columns;
    image{
        width: 100%;
        height: 100%;
        div{
            width: 78rpx;
            margin-top: -102rpx;
            text-align: center;
            position: fixed;
            margin-left: 29rpx;
            color: #5888D7;
            font-family:PingFangSC-Regular;
            font-weight:400;
            font-size:32rpx;
            line-height:36rpx;
        }
    }
}
.selected{
    image{
        div{
            color: #ffffff;
        }
    }
}
.tmp{
    image{
        div{
            margin-top: -86rpx;
        }
    }
}
.modal-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
}

.modal-dialog {
  width: 666rpx;
  height: 538rpx;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 9999;
  background: #ffffff;
  margin-left: 40rpx;
  margin-top: -258rpx;
  border-radius: 36rpx;
}

.modal-title {
  width:251rpx;
  height:34rpx;
  font-size:36rpx;
  padding-left: 28rpx;
  padding-top: 62rpx;
  font-family:PingFangSC-Medium;
  font-weight:bold;
  letter-spacing:5rpx;
  color:rgba(57,57,57,1);
}

.modal-text {
  padding-top: 52rpx;
  font-size: 30rpx;
  color: #777777;
  text-align: center;
  padding-left: 52rpx;
  padding-right: 51rpx;
}

.modal-content {
  height: 60rpx;
}

.modal-input {
  display: flex;
  background: #fff;
  border: none;
  border-radius: 4rpx;
  font-size: 28rpx;
}


.input {
  width: 100%;
  height: 82rpx;
  font-size: 28rpx;
  line-height: 28rpx;
  padding: 0 20rpx;
  box-sizing: border-box;
  color: #333;
}

input-holder {
  color: #666;
  font-size: 28rpx;
}

.modal-footer {
  display: flex;
  flex-direction: row;
  height: 92rpx;
  font-size: 34rpx;
  line-height: 86rpx;
}

.modal-cancel {
    width: 61rpx;
    height: 61rpx;
    margin-left: 350rpx;
    margin-top: 68rpx;
    z-index: 9999;
    overflow: hidden;
    position: fixed;
    top: 72%;
    left: 0;
    z-index: 10000;
    border-radius: 36rpx;
    image{
        width: 100%;
        height: 100%;
    }
}

.btn-confirm {
  width: 554rpx;
  margin-left: 54rpx;
  color: #ffffff;
  background-color: #4a88dd;
  text-align: center;
  border-radius: 61rpx;
}

</style>