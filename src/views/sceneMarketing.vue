<template>
  <div class="sceneMarketing vive">
    <Slideshow
      :img="advertising"
      :content="content"
    >
    </Slideshow>
    <div class="recommend">
      <div class="one">什么是场景营销</div>
      <div class="two">场景营销也叫场景化营销，是指根据用户的使用场景，触发对应的功能，活动，以满足用户的需求，电商的场景化营销，则是将场景化的营销思维置于电商促销活动组织当中，以此促进活动效果。</div>
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
import img1 from '../assets/sceneMarketing/img1.png'
import img2 from '../assets/sceneMarketing/img2.png'
import img3 from '../assets/sceneMarketing/img3.png'
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
            text: '以用户为中心构建高效的购物体验，增强对平台的黏性,也容易刺激额外需求'
          },
          {
            img: img2,
            text: '大幅提高营销的精准性，增强导购效率,降低决策成本'
          }
        ]
      },
      linkage: {
        scheme: '入伙大吉场景化销售解决方案',
        vision: '线上线下同步场景化，让用户所见即所得，获得更佳购物体验',
        img: img3
      }
    }
  },
}
</script>
<style lang="scss">
</style>