<template>
  <div class="significance">
    <div class="title">
      {{significance.title}}
    </div>
    <div class="image-text-list">
      <div
        v-for="(item,idx) in significance.imageTextList"
        :key="idx"
        class="center"
      >
        <img
          :src="item.img"
          alt=""
        >
        <div class="text">
          {{item.text}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['significance']
}
</script>
<style lang="scss">
.significance {
  height: 37vw;
  width: 100%;
  background: #eeeeee;
  text-align: center;
  overflow: hidden;
  .title {
    margin-top: 70px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 2vw;
    letter-spacing: 0vw;
    color: #434343;
  }
  .image-text-list {
    margin: 35px auto 0;
    display: flex;
    justify-content: center;
    .center {
      width: 24vw;
      img {
        width: 340px;
        height: 340px;
      }
      .text {
        margin: 40px auto 0;
        width: 21vw;
        font-family: MicrosoftYaHeiLight;
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 2vw;
        letter-spacing: 0vw;
        color: #434343;
      }
    }
  }
}
</style>