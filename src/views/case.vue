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
        <li class="company-item">
          <div
            class="info-wrap"
            style="opacity: 1;"
          >
            <div class="company-logo"><img
                src="images/first-logo.jpg"
                alt=""
              ></div>
            <div class="company-name">五仁餐饮</div>
            <h3
              class="company-wx"
              style="width: 200px; margin: auto;"
            >集食品生产与营销、餐饮供应链、连锁经营、职业培训为一体的综合性餐饮服务企业</h3>
            <div class="company-address">
              <span class="address-details">城市：广东省佛山市...</span>
              <button class="company-nature">餐饮服务</button>
            </div>
          </div>
          <div
            class="next-one"
            style="opacity: 0;"
          >
            <div class="company-img"><img
                src="images/first-img.jpg"
                alt=""
              ></div>
            <div class="help-shadow"></div>
            <div class="code-wrap">
              <div class="company-code"><img
                  src="images/first-code.jpg"
                  alt=""
                ></div>
              <div class="code-find">扫码查看案例</div>
            </div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
import advertising from '../assets/case/advertising.png'
import Slideshow from '../components/Slideshow'
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

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
      ]
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
      background: #000;
      margin-bottom: 35px;
    }
  }
}
</style>