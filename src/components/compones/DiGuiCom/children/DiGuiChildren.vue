<template>
  <div class="con">
  	<li>
  	  <a href="">{{tree.label}}</a>
  	  <ul>
  	  	<diguiChild v-if="tree.children" :tree="item" v-for="item in tree.children"></diguiChild>
  	  </ul>
  	</li>
  </div>
</template>

<script>
  export default {
  	name: 'diguiChild',
  	props: ['tree']
  }
</script>

<script>
	
</script>