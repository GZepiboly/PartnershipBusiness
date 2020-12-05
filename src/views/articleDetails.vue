<template>
  <div class="articleDetails">
    <Slideshow :img="advertising" />
    <NavMenu :dataList="navMenuList" />
    <div class="article-details-body">
      <div class="article-details-content">
        <div class="router">
          入伙大吉 > 商学院 > 行业资讯 > 正文
        </div>
        <div class="title">
          <div class="headline">分析家居装修新零售运营现状，发展中存在的问题</div>
          <div>2020.12.12 - 作者：大吉 已有 123人阅读此文</div>
        </div>
        <div class="details">
          <p>互联网时代的落幕让人们开始寻找新的发展动力去打破当下遭遇到的发展困境，寻求在新的
            市场环境下继续前行的动力。互联网家装同样如此。当互联网式的平台模式不再继续为传统
            节家装公司的发展带来丰沛的流量，一场席卷整个互联网家装市场蜕变正在上演。</p>
          <p>
            改变家装行业本身，而非C端用户，对家装行业进行新的赋能，正在成为贯穿整个行业始终
            的话题。尽管人们对于互联网家装究竟要向何处去始终都有不同的看法，但是有一点可以确
            认的是未来家装行业的发展在于B端行业的深度改造上，而非C端用户的持续输送上。</p>
          <p>如何借助新技术、新手段、新模式来推动B端行业的变革成为未来很长一段时间的发展重点。
            谁能够借助新的手段来推动家装行业的B端用户更好地变革，谁就能够在未来的发展过程当中
            继续占得先机，引领市场的发展。在新零售日渐成为市场主流的时候，我们来思考和探索新
            零售大背景下的家装行业的发展模式似乎能够找到更多的发展模式，以改变互联网时代平台
            型的发展方式，进入到一个多维、多元的发展轨道里。</p>
          <p>借助新零售的东风以及由此引发的诸多新技术的应用，互联网家装必将进入到更加关注行业
            本身，更加关注用户体验的时代。单纯以流量来盈利的发展模式将会被更多深度、多维的介
            入所取代，真正将家装行业的发展引向深入。每一个阶段的家装行业的发展都有着这个时代
            的鲜明印记，互联网阶段同样如此。</p>
          <p>
            我们看到在互联网时代那些成功的家装新模式几乎都与平台、流量、资本这些和互联网息息
            相关的字眼有着相当深刻的联系。当互联网的浪潮逐渐退却，我们与它挥手告别之际，家装
            行业的发展似乎同样起了波澜，唯互联网式商业模式的发展逐渐失去效力，新的发展随之而
            来。</p>
          <p>尽管人们对于后互联网时代的发展未有定论，但是几乎可以确定的是新零售将会成为未来的
            一个主要发展方向。通过新零售的方式对传统行业和互联网行业进行赋能必然成为未来的主
            题，以阿里、腾讯、百度和京东为代表的互联网巨头的率先尝试为我们打开了思考未来家装
            与新零售结合的新模式，由此必然带来家装行业的更多蜕变。</p>
        </div>
        <div class="pagination">
          <div>上一篇：做好家居装修新零售的几个关键要点</div>
          <div>下一篇：家居装修新零售的几个误区需要回避</div>
        </div>
      </div>
      <div class="broadside">
        <div
          v-for="(item,idx) in broadsideList"
          :key="idx"
          class="broadside-list"
          :style="{'margin-bottom':idx == 0? '95px':'0'}"
        >
          <div class="title">{{item.title}}</div>
          <div class="list">
            <div
              v-for="(it,index) in 10"
              :key="index"
            >
              分析家居装修新零售运营现状，发展中存在的……
            </div>
            <!-- <div v-for="(it,index) in item.list" :key="index"></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slideshow from '../components/Slideshow'
import NavMenu from '../components/NavMenu'
import advertising from '../assets/articleDetails/advertising.png'
export default {
  components: {
    Slideshow,
    NavMenu,
  },
  data() {
    return {
      advertising,
      navMenuList: {
        now: 0,
        list: ['全部', '产品功能', '行业资讯', '运营干货', '企业动态']
      },
      broadsideList: [
        {
          title: '热门文章',
          list: [

          ]
        }, {
          title: '最新文章',
          list: [

          ]
        }
      ]
    }
  },
}
</script>
<style lang="scss">
.articleDetails {
  .article-details-body {
    display: flex;
    background: #eeeeee;
    padding: 36px 14vw 96px;
    overflow: hidden;
    .article-details-content {
      overflow: hidden;
      flex: 1;
      .router {
        width: 100%;
        text-align: left;
        height: 25px;
        font-family: MicrosoftYaHei;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #a0a0a0;
      }
      .title {
        margin-top: 26px;
        height: 100px;
        background-color: #ffffff;
        border-left: 8px solid #a40000;
        box-sizing: border-box;
        padding-left: 38px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .headline {
          font-family: MicrosoftYaHeiLight;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #434343;
          line-height: 42px;
        }
      }
      .details {
        text-align: left;
        > p {
          font-family: MicrosoftYaHeiLight;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 30px;
          letter-spacing: 0px;
          color: #434343;
        }
      }
      .pagination {
        margin-top: 24px;
        width: 100%;
        height: 55px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
    .broadside {
      width: 385px;
      margin-left: 48px;
      .broadside-list {
        .title {
          font-family: MicrosoftYaHei-Bold;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 40px;
          letter-spacing: 0px;
          color: #434343;
          padding: 0 16px 0 0;
          text-align: left;
          box-sizing: border-box;
          width: 152px;
          border-bottom: 6px solid #a40000;
          margin-bottom: 23px;
        }
        .list {
          > div {
            line-height: 48px;
            text-align: left;
            border-bottom: solid 1px #dcdcdc;
          }
        }
      }
    }
  }
}
</style>