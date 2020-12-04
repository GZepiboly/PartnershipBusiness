<template>
  <div class="linkage">
    <div class="scheme">
      {{linkage.scheme}}
    </div>
    <div class="vision">
      {{linkage.vision}}
    </div>
    <img
      :src="linkage.img"
      alt=""
    >
  </div>
</template>
<script>
export default {
  props: ['linkage']
}
</script>
<style lang="scss">
.linkage {
  height: 52vw;
  width: 100%;
  overflow: hidden;
  .scheme {
    margin: 94px auto 0;
    padding: 0 18px;
    width: fit-content;
    border-bottom: 1px solid #e0e0e0;
    font-family: MicrosoftYaHei-Bold;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 72px;
    letter-spacing: 0vw;
    color: #535353;
  }
  .vision {
    margin: 22px auto 0;
    font-family: MicrosoftYaHeiLight;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #535353;
  }
  img {
    margin: 38px auto 0;
    width: 66vw;
    height: 34vw;
  }
}
</style>