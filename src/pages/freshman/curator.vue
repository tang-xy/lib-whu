<template>
  <div class='card'>
      <div class="background">
        <image class="backgroundpic" src='https://system.lib.whu.edu.cn/mp-static/馆长寄语/timg@2x.png'/>
        <div class="update">
            <div>
                <span>亲爱的新同学们：</span>
            </div>
            <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;“这是最好的时代，这是最坏的时代；这是智慧的时代，这是愚蠢的时代；这是信仰的时期，这是怀疑的时期；这是光明的季节，这是黑暗的季节；这是希望之春，这是失望之冬；人们面前有着各样事物，人们面前一无所有；人们正在直登天堂，人们正在直下地狱。”&#10;</span>
            </div>
            <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;亲爱的新同学，可以相信，你们都喜欢读书；也可以相信，你们中很多人读过狄更斯的《双城记》，并因此记得上面所引的话。这部小说虽然写成于150多年前，而这段话却是历久弥新。不管身处一个什么样的时代，作为一名武汉大学的新同学，你们应当清楚读书的意义。到名校学习，你们要学会交三类朋友：一类是你们的同学，一类是你的师长，一类是那些你们不见其面却见其言的人。是的，这后一类，就是图书的作者了。名牌大学之所以名牌，一个重要的原因在于，它能提供一个平台。在这个平台上，不仅有跟你一样智商突出的同辈，还有跟你不一样在立德立功立言上做出了优秀成绩的师长，更重要的是，一个历史悠久的名校，必然会有一个收藏宏富的图书馆。&#10;
                </span>
            </div>
            <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;你们将要在这里生活数年。这几年时光，说短不短，说长不长。如果不善加利用，某一天你会发现，它会像晨雾一般消散无踪。而你要利用它，最好的地方莫过于图书馆。我们图书馆是没有垃圾、没有围墙的大学。在这里，你可以学到知识，涵泳道德，领悟智慧。这样，不论我们面对的是一个什么样的时代，即使它是愚蠢的、怀疑的、黑暗的、令人失望的最坏的时代，我们也可通过我们学习能力的养成，孜孜不倦地、终身无悔地去努力，去改变，使我们的时代变成一个智慧的、信仰的、光明的、充满希望的最好的时代。&#10;</span>
            </div>
            <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们一同走进图书馆！</span>
            </div>
            <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王新才    
                </span>
            </div>
        </div>
      </div>
      <image class="pic" src='https://system.lib.whu.edu.cn/mp-static/馆长寄语/图层 529@2x.png'/>
  </div>
</template>

<script>
export default {
  mpType: 'page',
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '馆长寄语',
    });
  },
  data: {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.card{
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  .pic{
    width:171rpx;
    height:171rpx;
    position:absolute;
    z-index:0;
    left:513rpx;
    top:1rpx;
  }
  .background{
    width:718rpx;
    height:1704rpx;
    z-index:-1;
    position:absolute;
    left:12rpx;
    top:74rpx;
    .backgroundpic{
        width:718rpx;
        height:1104rpx;
    }
    .update{
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        position: absolute;
        flex-wrap: wrap;
        -webkit-flex-direction: row;
        flex-direction: row;
        left: 34rpx;
        top: 77rpx;
        width: 84%;
        height: 100%;
        padding: 15rpx;
        div{
            width:100%;
            span{
                color:#3a3a3a;
                font-size: 26rpx;
            }
        }
    }
  }
}
</style>
