<template>
  <div class="mainC">
    <ul>
      <DiGui :tree="tree"></DiGui>
    </ul>
  </div>
</template>

<script>
  import DiGui from './children/DiGuiChildren'
  export default {
    data () {
      return {
        tree: [{
          label: 'A第一级',
          children: [{
            label: 'A第二级',
            children: [{
              label: 'A第三级'
            }]
          }]
        }, {
          label: 'B第一级',
          children: [{
            label: 'B第二级',
            children: [{
              label: 'B第三级'
            }]
          }, {
            label: 'B2第二级',
            children: [{
              label: 'b2第三级'
            }]
          }]
        }]
      }
    },
    compones: {
      DiGui
    }
  }
</script>

<script>
	
</script>