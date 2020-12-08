<template>
  <div class="case">
    <Slideshow
      :img="advertising"
      :content="content"
    />
    <div class="case-content">
      <div
        v-for="(item,idx) in list"
        :key="idx"
        class="case-item"
      >
        <div
          class="company-item"
          @mouseenter="isDisplay(item,idx)"
          @mouseleave="isDisplay(item,idx)"
        >
          <div
            class="info-wrap"
            :style="{'opacity': item.isDisplay?1:0}"
          >
            <div class="company-logo"><img
                :src="item.img1"
                alt=""
              ></div>
            <div class="company-name">{{item.name}}</div>
            <h3
              class="company-wx"
              style="width: 200px; margin: auto;"
            >{{item.wx}}</h3>
            <div class="company-address">
              <span class="address-details">{{item.details}}</span>
              <button class="company-nature">{{item.nature}}</button>
            </div>
          </div>
          <div
            class="next-one"
            :style="{'opacity': !item.isDisplay?1:0}"
          >
            <div class="company-img"><img
                :src="item.img2"
                alt=""
              ></div>
            <div class="help-shadow"></div>
            <div class="code-wrap">
              <div class="company-code"><img
                  :src="item.imgcCode"
                  alt=""
                ></div>
              <div class="code-find">扫码查看案例</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import advertising from '../assets/case/advertising.png'
import Slideshow from '../components/Slideshow'
import firstLogo from '../assets/case/first-logo.jpg'
import firstImg from '../assets/case/first-img.jpg'
import firstCode from '../assets/case/first-code.jpg'
export default {
  components: {
    Slideshow,
  },
  data() {
    return {
      advertising,
      content: {
        type: 1,
        one: '您身边的朋友都在用',
        two: '家居装修企业的<br />共同选择',
        three: '申请演示'
      },
      list: [
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
        {
          img1: firstLogo,
          name: '五仁餐饮',
          wx: '集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业',
          details: '城市：广东省佛山市...',
          nature: '餐饮服务',
          img2: firstImg,
          imgcCode: firstCode,
          isDisplay: true
        },
      ]
    }
  },
  methods: {
    isDisplay(data, idx) {
      this.$set(this.list[idx],'isDisplay',!data.isDisplay)
    }
  }
}
</script>
<style lang="scss">
.case {
  .case-content {
    min-height: 500px;
    padding: 0 360px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 50px;
    .case-item {
      width: 22%;
      height: 490px;
      // background: #000;
      margin-bottom: 35px;
      .company-item {
        position: relative;
        // margin-right: 20px;
        transition: all 3s;
        // margin-bottom: 30px;
        .info-wrap {
          border: 1px solid #ccc;
          background: #fff;
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
          height: 490px;
          position: relative;
          .company-logo {
            width: 125px;
            height: 125px;
            margin: 68px auto 60px auto;
            background: #fff;
            border: 1px solid #ece2e7;
            border-radius: 50%;
            overflow: hidden;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              width: 100%;
            }
          }
          .company-name {
            text-align: center;
            font-size: 18px;
            font-weight: 800;
            margin-bottom: 30px;
            position: relative;
          }
          .company-wx {
            text-align: center;
            font-size: 13px;
            line-height: 25px;
            color: #757575;
          }
          .company-address {
            position: absolute;
            bottom: 10px;
            left: 20px;
            .address-details {
              font-size: 13px;
              color: #757575;
              display: inline-block;
            }
            .company-nature {
              width: 88px;
              text-align: center;
              margin-left: 20px;
              font-size: 13px;
              color: #757575;
              background: #fff;
              border: 1px solid #e5d8de;
            }
          }
        }
        .next-one {
          width: 100%;
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          box-shadow: 0 0px 20px #c9c9c9;
          .company-img {
            width: 100%;
            img {
              width: 100%;
            }
          }
          .help-shadow {
            height: 40px;
            width: 100%;
            background-image: linear-gradient(transparent, #ffffff);
            position: absolute;
            bottom: 160px;
            left: 0;
          }
          .code-wrap {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 160px;
            background: #fff;
            box-shadow: 0 -30px 20px -19px #fff;
            .company-code {
              width: 91px;
              margin: 20px auto 0 auto;
              img{
                width: 100%;
              }
            }
            .code-find {
              text-align: center;
              color: #707070;
              font-size: 14px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
}
</style>