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
        <input class='search-input' type='text' placeholder='搜索' @confirm=onInputSearch focus=true/>
      </div>
    </div>
    <div class='search-history-bar'>
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
    enStyle: {
      src: 'https://system.lib.whu.edu.cn/mp-static/110/圆角矩形 10 副本@3x.png',
      color: '#4A88DD',
    },
    searchType: ['全面检索', '题名', '著者', '索书号', 'ISSN', 'ISBN'],
    index: 0,
    searchContent: '',
    searchHistory: [
      { name: '明朝那些事' },
      { name: '明朝那些事' },
      { name: '活着' },
      { name: '明朝那些事' },
      { name: '活着' },
      { name: '明朝那些事' },
      { name: '活着' },
      { name: '明朝那些事' },
      { name: '明朝那些事' },
    ],
  },
  methods: {
    onSwitchToCN() {
      this.lang = 'cn';
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
      this.searchContent = e.mp.detail.value;
      this.search(this.searchContent);
    },
    onClickHistory(key) {
      const list = this.searchHistory;
      this.search(list[key]);
    },
    search(value) {
      wx.navigateTo({ url: `/pages/search/result?value=${value}` });
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
    height: 5vh;
    display: flex;
    justify-content: center;
    margin-bottom: 2vh;
    button{
      width: 45vw;
      height: 5vh;
      background: none;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      border-style: none;
      padding: 0px;
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
      }
    }
  }
  .search-bar{
    width: 100vw;
    height: 5vh;
    margin-left: 4.5vw;
    display: flex;
    picker{
      height: 5vh;
      width: 25vw;
      border-style: solid;
      border-radius: 5px;
      border-width: 1px;
      display: flex;
      align-items: center;
      span{
        margin-left: 2vw;
      }
      image{
        width: 2vw;
        height: 1vh;
      }
    }
    .input-container{
      height: 5vh;
      width: 63vw;
      display: flex;
      border-style: solid;
      border-radius: 5px;
      border-width: 1px;
      align-items: center;
      margin-left: 2vw;
      image{
        width: 5vw;
        height: 5vw;
        margin-left: 2vw;
        margin-right: 2vw;
      }
    }
  }
  .search-history-bar{
    color: grey;
    margin-left: 4.5vw;
    margin-right: 4.5vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
    display: flex;
    height: 5vh;
    align-items: center;
    image{
      width: 5vw;
      height: 5vw;
      right: 4.5vw;
      position: absolute;
    }
  }
  .search-history-container{
    display: flex;
    flex-wrap: wrap;
    margin-left: 4.5vw;
    margin-right: 4.5vw;
    button{
      margin-left: 1vw;
      margin-right: 1vw;
      margin-top: 1vh;
      color: grey;
      line-height: 5vh;
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
