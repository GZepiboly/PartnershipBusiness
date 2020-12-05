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
      <div class="one">什么是供应链电商</div>
      <div class="two">供应链电商是指通过互联网平台，实现供应链交易过程的全程电子化，彻底变革传统企业内部从生产到客户，及产业上下游商业协同方式的商业模式。</div>
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
import img1 from '../assets/theWholeChain/img1.png'
import img2 from '../assets/theWholeChain/img2.png'
import img3 from '../assets/theWholeChain/img3.png'
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
        title: '供应链电商对企业的意义',
        imageTextList: [
          {
            img: img1,
            text: '互联网的标准化设计，使企业的营销效率更，成本更有竞争力'
          },
          {
            img: img2,
            text: '互联网开放性让企业上下游企业更容易成为一体,有利于商业生态的形成'
          }
        ]
      },
      linkage: {
        scheme: '入伙大吉全链条一体化整合解决方案',
        vision:'优化整合供应链，一体化服务流程，扩展销售渠道，提升效益',
        img:img3
      }
    }
  },
}
</script>
<style lang="scss">
.theWholeChain {
}
</style>