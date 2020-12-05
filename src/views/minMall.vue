<template>
  <div>
    <Slideshow
      :img="advertising"
      :content="content"
    >
  </div>
</template>
<script>
import Slideshow from '../components/Slideshow'
export default {
  components:{
    Slideshow,
    
  },
  data() {
    return {
      
    }
  },
}
</script>