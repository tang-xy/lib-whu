<template>
  <scroll-view  scroll-y="true" style="height:200px"  class="page-body" bindscrolltolower="loadMore">
    <view class="swiper">
      <swiper class="swiper-box" :indicator-dots="indicatorDots" :vertical="vertical"
            :autoplay="autoplay" :interval="interval" :duration="duration"
            indicator-color="#fff" indicator-active-color="red">
        <block :wx:for-items="banner_url" wx:key="item.id">
          <navigator url="../blogList/blogList">
            <swiper-item>
              <block :wx:if="item">
                <image class="imgw" :src="item.url"  mode="aspectFill"/>
              </block>
              <block wx:else>
                <image src="../../images/default_pic.png" mode="aspectFill"></image>
              </block>
            </swiper-item>
          </navigator>
        </block>
      </swiper>
    </view>
  </scroll-view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  config: {
    navigationBarTitleText: 'Vuex示例',
  },

  computed: {
    ...mapState([
      'count',
    ]),
  },

  methods: {
    ...mapMutations([
      'increment',
      'decrement',
    ]),
  },
};
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
