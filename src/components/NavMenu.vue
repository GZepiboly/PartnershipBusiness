<template>
  <div class="nav-menu">
    <div
      v-for="(item,idx) in dataList.list"
      :key="idx"
      class="tab"
      :class="dataList.now == idx ? 'now':''"
      @click="alterNow(idx)"
    >
      {{item}}
    </div>
  </div>
</template>
<script>
export default {
  props: ['dataList'],
  methods:{
    alterNow(e){
      this.$set(this.dataList,'now',e)
    }
  }
}
</script>
<style lang="scss">
.nav-menu {
  width: 100%;
  height: 5vw;
  background-color: #ffffff;
  padding: 0 14vw;
  box-sizing: border-box;
  display: flex;
  .tab {
    font-family: MicrosoftYaHei;
    font-size: 30px;
    font-weight: normal;
    letter-spacing: 0vw;
    color: #313131;
    line-height: 5vw;
    padding: 0 15px;
    margin: 0 3px;
  }
  .now{
    border-bottom: 8px solid #a40000;
  }
}
</style>