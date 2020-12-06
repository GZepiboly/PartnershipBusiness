<template>
  <div class="academy">
    <Slideshow :img="advertising" />
    <NavMenu :dataList="navMenuList" />
    <div class="academy-body">
      <div class="academy-content">
        <div class="list">
          <div
            class="item"
            v-for="(item,index) in 10"
            :key="index"
          >
            <div class="content">
              <img
                :src="img1"
                alt=""
              >
              <div class="text">
                <div class="one">入伙大吉：家居装修行业已经迈入新零售的新时代！</div>
                <div class="two">12.12 - 运营干货-大吉 - 阅23</div>
                <div class="three">自1927年，美国宝洁公司出现了第一名产品经理以来，产品管理制度逐渐在越来越多的行业中得到应用...阅读全文</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <!-- <div class="present">
            {{now}}/20
          </div>
          <div class="turning">上一页</div>
          <div
            class="pagination-list"
            v-for="item in 20"
            :key="item"
          >
             <template v-if="item == 1">
              {{item}}
            </template>
            <template v-if="now > 2&&item==2">
              ...
            </template>
            <template v-if="item < now + 5 && item!= 1 && item !=20">
              {{item}}
            </template>
            <template v-if="now <17 && item==17">
              ...
            </template>
            <template v-if="item == 20">
              {{item}}
            </template>
          </div>
          <div class="turning">下一页</div> -->
          <el-pagination
            layout="total,prev, pager, next"
            :total="total"
            :page-size="size"
            :prev-text="'上一页'"
            :next-text="'下一页'"
            :current-page.sync="page"
            @current-change="currentChange"
          />
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
import img1 from '../assets/articleDetails/img1.png'
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
      img1,
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
      ],
      page: 1,
      total: 200,
      size: 10
    }
  },
  methods: {
    currentChange(e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss">
.academy {
  .academy-body {
    display: flex;
    background: #eeeeee;
    padding: 36px 14vw 96px;
    overflow: hidden;
    .academy-content {
      overflow: hidden;
      flex: 1;
      .list {
        margin-bottom: 80px;
        .item {
          height: 180px;
          border-bottom: solid 1px #d2d2d2;
          display: flex;
          align-items: center;
          .content {
            height: 135px;
            width: 100%;
            display: flex;
            img {
              width: 198px;
              height: 135px;
              margin-right: 23px;
            }
            .text {
              display: flex;
              flex-direction: column;
              text-align: left;
              justify-content: space-between;
              .one {
                font-family: MicrosoftYaHei-Bold;
                font-size: 30px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #434343;
              }
              .two {
                font-family: MicrosoftYaHeiLight;
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #434343;
              }
              .three {
                font-family: MicrosoftYaHeiLight;
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #434343;
              }
            }
          }
        }
      }
      .pagination {
        // width: 441px;
        height: 28px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        line-height: 28px;
        .btn-prev {
          background: transparent;
          // font-family: MicrosoftYaHeiLight;
          // font-size: 18px;
          // font-weight: normal;
          // font-stretch: normal;
          // letter-spacing: 0px;
          // color: #434343;
          // padding-bottom: 4px;
          border-bottom: #b5b5b5 solid 6px;
          // display: flex;
          // justify-content: center;
          padding-left: 12px;
          margin-right: 25px;
        }
        .btn-prev:hover {
          color: #a40000;
          border-bottom-color: #a40000;
        }
        .el-pager li {
          background: transparent;
          border-bottom: #b5b5b5 solid 6px;
          margin-right: 25px;
        }
        li.active {
          color: #a40000;
          border-bottom-color: #a40000;
        }
        li:hover {
          color: #a40000;
          border-bottom-color: #a40000;
        }
        .btn-next {
          background: transparent;
          border-bottom: #b5b5b5 solid 6px;
          padding-right: 12px;
        }
        .btn-next:hover {
          color: #a40000;
          border-bottom-color: #a40000;
        }
        .present {
          line-height: 28px;
        }
        .pagination-list {
          line-height: 28px;
        }
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