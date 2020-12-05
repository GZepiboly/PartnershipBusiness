<template>
  <div class="oTwoo vive">
    <Slideshow
      :img="advertising"
      :content="content"
    >
      <!-- <template slot="content">
        <div class="slot">
          
        </div>
      </template> -->
    </Slideshow>
    <div class="recommend">
      <div class="one">什么是O2O</div>
      <div class="two">O2O全称Online to Offline,是指将线下的商业机会与互联网相结合，让互联网成为线下交易的平台，互联网与实体相结合的一种商业模式。</div>
    </div>
    <Significance :significance="significance" />
    <Linkage :linkage="linkage" />
  </div>
</template>
<script>
import Slideshow from '../components/Slideshow'
import Significance from '../components/Significance'
import Linkage from '../components/Linkage'
import advertising from '../assets/o2o/advertising.png'
import img1 from '../assets/o2o/img1.png'
import img2 from '../assets/o2o/img2.png'
import img3 from '../assets/o2o/img3.png'
export default {
  components: {
    Slideshow,
    Significance,
    Linkage
  },
  data() {
    return {
      advertising,
      content: {
        type: 1,
        one: '针对性解决营销难题',
        two: '精准匹配不同场景的<br />解决方案',
        three: '申请演示'
      },
      significance: {
        title: 'O2O对企业的意义',
        imageTextList: [
          {
            img: img1,
            text: '线上为线下引流,通过线上的流量、信息和产品聚集，给线下合作商家带客户'
          },
          {
            img: img2,
            text: '线下为线上导流,充分利用线下门店的体验优势,和线上的购物支付快递等服务优势,实现“线下体验+线上销售”模式'
          }
        ]
      },
      linkage: {
        scheme: '入伙大吉Online-Offline联动解决方案',
        vision:'线上线下联动，让品牌具有线下体验，也获得线上强大分发渠道',
        img:img3
      }
    }
  },
}
</script>
<style lang="scss">
.oTwoo {
}
</style>