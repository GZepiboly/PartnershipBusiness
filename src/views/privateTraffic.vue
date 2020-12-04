<template>
  <div class="oTwoo vive">
    <Slideshow
      :img="advertising"
      :center="center"
    >
      <!-- <template slot="center">
        <div class="slot">
          
        </div>
      </template> -->
    </Slideshow>
    <div class="recommend">
      <div class="one">什么是私域流量</div>
      <div class="two">私域流量是指相对于搜索，淘宝等公域流量而言，属于商家自己的，不用付费的，任意频次，可反复利用，直接触达用户的，基于信任且相对封闭的流量。</div>
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
import img1 from '../assets/privateTraffic/img1.png'
import img2 from '../assets/privateTraffic/img2.png'
import img3 from '../assets/privateTraffic/img3.png'
import img4 from '../assets/privateTraffic/img4.png'
export default {
  components: {
    Slideshow,
    Significance,
    Linkage
  },
  data() {
    return {
      advertising,
      center: {
        type: 1,
        one: '针对性解决营销难题',
        two: '精准匹配不同场景的<br />解决方案',
        three: '申请演示'
      },
      significance: {
        title: '私域流量对企业的意义',
        imageTextList: [
          {
            img: img1,
            text: '流量直接来源于自身服务过的客户或口碑的直接导入，流量更可控'
          },
          {
            img: img2,
            text: '公域流量价格越来越昂贵，转化率越来越低，私域流量性价比更高'
          },
          {
            img: img4,
            text: '企业可以通过私域流量直接对用户进行精准，提供了深入服务用户的可能'
          },
        ]
      },
      linkage: {
        scheme: '入伙大吉私域流量构建解决方案',
        vision:'打通线上线下数据，构建私域流量池，通过营销自动化，提高用户复购率',
        img:img3
      }
    }
  },
}
</script>
<style lang="scss">
.privateTraffic {
}
</style>