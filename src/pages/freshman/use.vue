<template>
    <div class="use">
      <scroll-view
      class='scroll-list'
      scroll-y=true
      enable-back-to-top=true
      @scrolltolower=onScrollToBottom>
      <div class="list" v-for='(item, index) in result' :key=index>
        <div class="title">{{item.title}}</div>
        <div class="list2" v-for='(item2, index2) in item.data' :key=index2>
          <div class="title2">{{item2.title2}}</div>
          <div class="con" v-for='(item3, index3) in item2.context' :key=index3>
            <div class="title3">{{item3.title3}}</div>
            <div class="text">{{item3.text}}</div>
          </div>
        </div>
      </div>
      </scroll-view>
    </div>
</template>


<script>
export default {
  mpType: 'page',
  onUnLoad() {
  },
  onShareAppMessage() {
    return {
      title: '武汉大学图书馆',
    };
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '使用攻略',
    });
  },
  data: {
    result: [
      {
        title: '借书还书',
        data: [
          {
            title2: '续借、还书、预约与催还',
            context: [
              {
                title3: '续借',
                text: '在帐号上的逾期费未达到1.00元并且没有过期图书的情况下，可以对帐上的图书进行续借(前提是该图书未被其他读者预约)。本科生每本书可续借2次，续借期为30天。硕士生、博士生每本书可续借1次，硕士生续借期为60天，博士生续借期为90天。\n续借方法\n1.网上自助续借。从图书馆主页登录“我的图书馆”，然后点击“借阅信息”，在需要续借的记录前的方框内打钩，最后选择表格右上角的“全部/部分续借”完成操作。图书到期时间为晚上22:30，到期之前均可在网上进行自助续借。\n2.工作人员续借。读者带校园卡在流通台开放期间到各分馆流通台让工作人员续借。',
              },
              {
                title3: '续借',
                text: '在帐号上的逾期费未达到1.00元并且没有过期图书的情况下，可以对帐上的图书进行续借(前提是该图书未被其他读者预约)。本科生每本书可续借2次，续借期为30天。硕士生、博士生每本书可续借1次，硕士生续借期为60天，博士生续借期为90天。',
              },
            ],
          },
        ],
      },
      {
        title: '上网自习',
        data: [
          {
            title2: '续借、还书、预约与催还',
            context: [
              {
                title3: '续借',
                text: '在帐号上的逾期费未达到1.00元并且没有过期图书的情况下，可以对帐上的图书进行续借(前提是该图书未被其他读者预约)。本科生每本书可续借2次，续借期为30天。硕士生、博士生每本书可续借1次，硕士生续借期为60天，博士生续借期为90天。\n续借方法\n1.网上自助续借。从图书馆主页登录“我的图书馆”，然后点击“借阅信息”，在需要续借的记录前的方框内打钩，最后选择表格右上角的“全部/部分续借”完成操作。图书到期时间为晚上22:30，到期之前均可在网上进行自助续借。\n2.工作人员续借。读者带校园卡在流通台开放期间到各分馆流通台让工作人员续借。',
              },
              {
                title3: '续借',
                text: '在帐号上的逾期费未达到1.00元并且没有过期图书的情况下，可以对帐上的图书进行续借(前提是该图书未被其他读者预约)。本科生每本书可续借2次，续借期为30天。硕士生、博士生每本书可续借1次，硕士生续借期为60天，博士生续借期为90天。',
              },
            ],
          },
        ],
      },
    ],
  },
};
</script>
<style lang="scss" scoped>
.use{
  margin-left: 40rpx;
  margin-top: 46rpx;
  margin-right: 50rpx;
  .list{
    margin-bottom: 72rpx;
  }
  .title{
    font-size: 48rpx;
    color: #5888D7;
  }
  .title2{
    font-weight: 700;
    font-size: 30rpx;
    color: #606060;
    border-bottom-color: #B4B4B4;
    border-bottom-width: 2rpx;
    margin-top: 20rpx;
    margin-bottom: 20rpx;
  }
  .con{
    background-color: #E9E9E9;
    font-size: 24rpx;
    .title3{
    font-weight: 700;
    }
  }
}
</style>