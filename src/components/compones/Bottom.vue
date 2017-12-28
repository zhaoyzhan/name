<template>
  <div class="con-header">
    <h1 class="head-title">底部</h1>
    <slot name="h-left" class="h-left"></slot>
    <slot name="h-right" class="h-right"></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang='less' scoped>
  .con-header {
  	position: relative;
  	height: 50px;
    background: gray;
    .head-title {
    	text-align: center;
    	line-height: 50px;
    	font-weight: 100;
    }
    .h-left {
		position: absolute;
		left: 100px;
		top: 10px;
		height: 30px;
		line-height: 30px;
	}
	.h-right {
		position: absolute;
		right: 100px;
		top: 10px;
		height: 30px;
		line-height: 30px;
	}
  }
</style>