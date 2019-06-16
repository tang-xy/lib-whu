<template>
  <div class='bk-container'>
    <div class='title-container'>
      <span>馆藏查询</span>
    </div>
    <div class='lang-switch'>
      <button id='cn' type='default' @click='onSwitchToCN' style='margin-left: 4.5vw;'>
        <span :style='{color: cnStyle.color}'>中文库</span>
        <image :src=cnStyle.src mode='scaleToFill'/>
      </button>
      <button id='en' type='default' @click='onSwitchToEN' style='margin-right: 4.5vw;'>
        <span :style='{color: enStyle.color}'>英文库</span>
        <image :src=enStyle.src mode='scaleToFill'/>
      </button>
    </div>
    <div class='search-bar'>
      <picker @change=onSearchTypeChange :value=index :range=searchType>
        <span>{{searchType[index]}}</span>
        <image src='https://system.lib.whu.edu.cn/mp-static/110/长箭头@3x.png' mode='scaleToFill'/>
      </picker>
      <div class='input-container'>
        <image src='https://system.lib.whu.edu.cn/mp-static/110/搜索@3x.png' mode='scaleToFill'/>
        <input class='search-input' type='text' placeholder='搜索' @confirm=onInputSearch :focus="focus" @input=onBindinput />
      </div>
      <div class="search-search-button" @click=onInputSearch v-if=true>
        <span>搜索</span>
      </div>
    </div>
    <div class='search-history-bar' @click="onClickDelete">
      <span>历史搜索</span>
      <image src='https://system.lib.whu.edu.cn/mp-static/110/垃圾桶@3x.png' mode='scaleToFill'/>
    </div>
    <div class='search-history-container'>
      <button v-for='(item, index) in searchHistory' :key=index @click=onClickHistory(index)>{{item.name}}</button>
    </div>
    <image class='bk' src='https://system.lib.whu.edu.cn/mp-static/110/bk.png' mode='scaleToFill'/>
  </div>
</template>

<script>
export default {
  mpType: 'page',
  data: {
    lang: 'cn',
    cnStyle: {
      src: 'https://system.lib.whu.edu.cn/mp-static/110/圆角矩形 10@3x.png',
      color: 'white',
    },
    focus: true,
    enStyle: {
      src: 'https://system.lib.whu.edu.cn/mp-static/110/圆角矩形 10 副本@3x.png',
      color: '#4A88DD',
    },
    searchType: ['全部', '题名', '著者', '索书号', 'ISSN', 'ISBN'],
    index: 0,
    searchContent: '',
    searchHistory: wx.getStorageSync('searchHistory') || [],
    value: '',
  },
  watch: {
    searchHistory: {
      handler(val, oldVal) {
        wx.setStorageSync('searchHistory', val);
      },
      deep: true,
    },
  },
  methods: {
    onClickDelete() {
      this.searchHistory = [];
    },
    onBindinput(e) {
      this.value = e.mp.detail.value;
    },
    onSwitchToCN() {
      this.lang = 'cn';
      this.focus = true;
      this.cnStyle = {
        src: 'https://system.lib.whu.edu.cn/mp-static/110/圆角矩形 10@3x.png',
        color: 'white',
      };
      this.enStyle = {
        src: 'https://system.lib.whu.edu.cn/mp-static/110/圆角矩形 10 副本@3x.png',
        color: '#4A88DD',
      };
    },
    onSwitchToEN() {
      this.lang = 'en';
      this.focus = true;
      this.enStyle = {
        src: 'https://system.lib.whu.edu.cn/mp-static/110/圆角矩形 10@3x.png',
        color: 'white',
      };
      this.cnStyle = {
        src: 'https://system.lib.whu.edu.cn/mp-static/110/圆角矩形 10 副本@3x.png',
        color: '#4A88DD',
      };
    },
    onSearchTypeChange(e) {
      this.index = Number(e.target.value);
    },
    onInputSearch(e) {
      this.search(this.value);
    },
    onClickHistory(key) {
      const list = this.searchHistory;
      this.search(list[key].name);
    },
    search(value) {
      this.searchHistory.push({
        name: value,
      });
      if (this.searchHistory.length > 16) {
        this.searchHistory.shift();
      }
      wx.navigateTo({ url: `/pages/search/result?value=${value}&&index=${this.index}&&lang=${this.lang}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.bk-container{
  width: 100vw;
  height: 100vh;
  .title-container{
    display: flex;
    color: white;
    padding-top: 2vh;
    padding-right: 2vw;
    height: 7vh;
    span{
      position: absolute;
      right: 4vw;
    }
  }
  .lang-switch{
    width: 100vw;
    height: 83rpx;
    display: flex;
    justify-content: center;
    margin-bottom: 20rpx;
    button{
      width: 338rpx;
      height: 63rpx;
      background: none;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      border-style: none;
      padding-left: 2.5rpx;
      padding-right: 2.5rpx;
      image{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0%;
        left: 0%;
      }
      span{
        position:absolute;
        width: 100%;
        height: 100%;
        top:0%;
        left: 0%;
        z-index: 10;
        font-size: 30rpx;
      }
    }
  }
  .search-bar{
    width: 100vw;
    height: 69rpx;
    margin-left: 4.5vw;
    display: flex;
    picker{
      height: 69rpx;
      width: 144rpx;
      border-style: solid;
      border-radius: 5rpx;
      border-width: 1rpx;
      display: flex;
      align-items: center;
      span{
        margin-left: 31rpx;
        color: #3b3b3b;
        font-size: 30rpx;
        margin-right: 27rpx
      }
      image{
        width: 14rpx;
        height: 14rpx;
      }
    }
    .input-container{
      height: 69rpx;
      width: 466rpx;
      display: flex;
      border-style: solid;
      border-radius: 5px;
      border-width: 1px;
      align-items: center;
      margin-left: 10rpx;
      image{
        width: 35rpx;
        height: 35rpx;
        margin-left: 25rpx;
        margin-right: 8rpx;
      }
    }
    .search-search-button{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-left: 12rpx;
      span{
        color: #4a88dd;
        font-size: 30rpx;
      }
    }
  }
  .search-history-bar{
    color: #ABABAB;
    margin-left: 4.5vw;
    margin-right: 4.5vw;
    margin-top: 48rpx;
    margin-bottom: 24rpx;
    display: flex;
    height: 29rpx;
    align-items: center;
    font-size: 30rpx;
    image{
      width: 31rpx;
      height: 33rpx;
      right: 49rpx;
      position: absolute;
    }
  }
  .search-history-container{
    display: flex;
    flex-wrap: wrap;
    margin-left: 47rpx;
    margin-right: 29rpx;
    button{
      margin-left: 0;
      margin-right: 15rpx;
      margin-top: 15rpx;
      color: #777777;
      line-height: 5vh;
      background-color: #EAEAEA;
      font-size: 28rpx;
    }
  }
  .bk{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
}
</style>
