<template>
  <div class="contactUs">
    <Slideshow :img="advertising">
      <template slot="content">
        <div class="slot">
          <div class="one">一切为了商家</div>
          <div class="two">ALL FOR BUSINESS</div>
        </div>
      </template>
    </Slideshow>
    <NavMenu :dataList="navMenuList" />
    <div class="qr-code">
      <div class="img"></div>
      <div class="contactWay">
        <div class="one">您的专属服务大使</div>
        <div class="two">家居装修新零售</div>
        <div class="three">134 2445 7188</div>
        <div class="four">7*24小时专业服务</div>
        <div class="five">在线咨询</div>
      </div>
    </div>
    <div class="flow">
      <div class="title">
        合作流程
      </div>
      <div class="detail">
        <div class="wire"></div>
        <div class="flowDirection">
          <div
            v-for="(item,idx) in flowDirection"
            :key="idx"
            class="item"
          >
            <img
              :src="item.isbol?item.img1:item.img2"
              alt=""
            >
            <div class="text">
              <div class="title">{{item.title}}</div>
              <div
                class="content"
                v-for="(it,index) in item.content"
                :key="index"
              >
                {{it}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slideshow from '../components/Slideshow'
import NavMenu from '../components/NavMenu'
import advertising from '../assets/contactUs/advertising.png'
import img1 from '../assets/contactUs/img1.png'
import img2 from '../assets/contactUs/img2.png'
import img3 from '../assets/contactUs/img3.png'
import img4 from '../assets/contactUs/img4.png'
import img5 from '../assets/contactUs/img5.png'
import img6 from '../assets/contactUs/img6.png'
import img7 from '../assets/contactUs/img7.png'
import img8 from '../assets/contactUs/img8.png'
import img9 from '../assets/contactUs/img9.png'
import img10 from '../assets/contactUs/img10.png'
import img11 from '../assets/contactUs/img11.png'
import img12 from '../assets/contactUs/img12.png'
import img13 from '../assets/contactUs/img13.png'
import img14 from '../assets/contactUs/img14.png'
import img15 from '../assets/contactUs/img15.png'
import img16 from '../assets/contactUs/img16.png'
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
        list: ['联系我们', '企业简介']
      },
      flowDirection: [
        {
          img1: img1,
          title: '需求沟通',
          content: ['倾听思考，收集内容资料', '（商务人员、产品经理）'],
          isbol:true,
          img2:img2
        },
        {
          img1: img3,
          title: '项目分析',
          content: ['理解消化，做出项目评估', '（商务人员、产品经理）'],
          isbol:true,
          img2:img4
        },
        {
          img1: img5,
          title: '交互设计',
          content: ['交互分析、行为设计，确保最优用户体验', '（交互设计师、界面设计师）'],
          isbol:true,
          img2:img6
        },
        {
          img1: img7,
          title: '视觉创意',
          content: ['界面设计、色彩及平面元', '素设计，结构及布局规范确认', '（界面设计师）'],
          isbol:true,
          img2:img8
        },
        {
          img1: img9,
          title: '前端制作',
          content: ["HTML/5、CSS3、JS实现", '网页重构，设计效果图网页化', '（前端开发工程师）'],
          isbol:true,
          img2:img10
        },
        {
          img1: img11,
          title: '功能开发',
          content: ['原生态程序编写、代', '码优化、实现项目功能', '（后台开发程序员）'],
          isbol:true,
          img2:img12
        },
        {
          img1: img13,
          title: '整体测试',
          content: ['界面与程序整合，整体性', '能测试，修改调整，完善细节', '（网编人员）'],
          isbol:true,
          img2:img14
        },
        {
          img1: img15,
          title: '内容初始化',
          content: ['上传、发布、完善内容', '信息，部署上线', '（网编人员）'],
          isbol:true,
          img2:img16
        },
      ]
    }
  },
}
</script>
<style lang="scss">
.contactUs {
  .slot {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .one {
      font-family: MicrosoftYaHei-Bold;
      font-size: 60px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 8px;
      color: #ffffff;
    }
    .two {
      font-family: MicrosoftYaHeiLight;
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 5px;
      color: #ffffff;
      line-height: 74px;
    }
  }
  .qr-code {
    width: 100%;
    height: 536px;
    background: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      width: 354px;
      height: 354px;
      // background-color: #ffffff;
      border-radius: 10px;
      background: url('../assets/contactUs/qrCode.png') no-repeat;
      background-size: 100% 100%;
      margin-right: 136px;
    }
    .contactWay {
      // width: 354px;
      height: 354px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .one {
        font-family: MicrosoftYaHei-Bold;
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #000;
      }
      .two {
        font-family: MicrosoftYaHeiLight;
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #313131;
      }
      .three {
        font-family: MicrosoftYaHei-Bold;
        font-size: 60px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #313131;
      }
      .four {
        font-family: MicrosoftYaHeiLight;
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #434343;
      }
      .five {
        font-family: MicrosoftYaHeiLight;
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #ffffff;
        width: 416px;
        height: 90px;
        background-color: #a40000;
        border-radius: 45px;
        text-align: center;
        line-height: 90px;
      }
    }
  }
  .flow {
    height: 648px;
    background: #fff;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    > .title {
      height: 54px;
      padding-bottom: 8px;
      box-sizing: border-box;
      border-bottom: 6px solid #a40000;
      font-family: MicrosoftYaHei-Bold;
      margin-top: 52px;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #434343;
      width: fit-content;
    }
    .detail {
      margin-top: 120px;
      height: 300px;
      width: 1450px;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center;
      .wire {
        background: url('../assets/contactUs/wire.png') no-repeat;
        background-size: 100% 100%;
        height: 88px;
        width: 1370px;
      }
      .flowDirection {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        padding-right: 276px;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        .item {
          width: 100px;
          // height: 50px;
          display: flex;
          align-items: center;
          flex-direction: column;
          position: relative;
          .text {
            position: absolute;
            width: 350px;
            .title {
              font-family: MicrosoftYaHei;
              font-size: 30px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #434343;
            }
            .content {
              font-family: MicrosoftYaHei;
              font-size: 18px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #434343;
            }
          }
          &:nth-child(odd) {
            img {
              margin-bottom: 90px;
              // margin-top: 110px;
            }
            .text{
              bottom: -84px;
            }
          }
          &:nth-child(even) {
            flex-direction: column-reverse;
            img {
              margin-top: 90px;
              // margin-bottom: 110px;
            }
             .text{
              top: -84px;
            }
          }
        }
      }
    }
  }
}
</style>