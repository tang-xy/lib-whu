<template>
    <div>
        <view class="modal-mask" bindtap="hideModal" catchtouchmove="preventTouchMove" v-if="showModal"></view>
        <view class="modal-dialog" v-if="showModal" >
            <div class="modal-icon">
                <image src='https://system.lib.whu.edu.cn/mp-static/341/感叹 (1)@2x.png' mode='aspectFit'/>
            </div>
            <view class="modal-title">{{title}}</view>
            <view class="modal-text">{{text}}</view>
            <view class="modal-content">
            </view>
            <view class="modal-footer">
                <view class="btn-confirm" @click=onConfirm data-status="confirm">确定</view>
            </view>
        </view>
    </div>
</template>

<script>
export default {
  name: 'falseModal',
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
  },
  methods: {
    showDialogBtn() {
      this.showModal = true;
    },
    preventTouchMove() {
    },
    hideModal() {
      this.showModal = false;
    },
    onCancel() {
      this.$emit('cancel');
      this.hideModal();
    },
    onConfirm() {
      this.$emit('confirm');
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
.modal-icon{
    margin-left: 258rpx;
    margin-top: 36rpx;
    width: 136rpx;
    height: 136rpx;
    image{
        width: 100%;
        height: 100%;
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
  background: #f9f9f9;
  margin-left: 40rpx;
  margin-top: -258rpx;
  border-radius: 36rpx;
}

.modal-title {
  padding-top: 27rpx;
  font-size: 36rpx;
  color: #393939;
  text-align: center;
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