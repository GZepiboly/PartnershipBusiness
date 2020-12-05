<template>
  <div class="slideshow">
    <img
      :src="img"
      alt=""
    />
    <div class="content">
      <slot name="content"></slot>
      <div class="text">
        <template v-if="content">
          <div class="one">{{content.one}}</div>
          <div
            class="two"
            v-html="content.two"
          ></div>
          <div class="three">{{content.three}}</div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['img', 'content']
}
</script>
<style lang="scss">
.slideshow {
  height: 33vw;
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
  .content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 8vw 19vw;
    z-index: 1;
    position: absolute;
    top: 0;
    .text {
      text-align: left;
      .one {
        // height: 2vw;
        font-family: MicrosoftYaHei;
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 3vw;
        letter-spacing: 0vw;
        color: #ffffff;
      }
      .two {
        margin-top: 2vw;
        font-family: SimHei;
        font-size: 60px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 3vw;
        letter-spacing: 0vw;
        color: #ffffff;
      }
      .three {
        width: 15vw;
        height: 4vw;
        margin-top: 3vw;
        border-radius: 2vw;
        border: solid 1px #ffffff;
        font-family: MicrosoftYaHei;
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 4vw;
        letter-spacing: 0vw;
        color: #ffffff;
        text-align: center;
      }
    }
  }
}
</style>