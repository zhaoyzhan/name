<template>
  <div class="hello">
    <!-- <div class="page-bar"> -->
      <!-- 分页 -->
      <!-- <ul>
        <li v-if="cur>1"><a v-on:click="cur--,pageClick()">上一页</a></li>
        <li v-if="cur==1"><a class="banclick">上一页</a></li>
        <li v-for="index in indexs" v-bind:class="{ 'active': cur == index}">
          <a v-on:click="btnClick(index)">{{ index }}</a>
        </li>
        <li v-if="cur!=all"><a v-on:click="cur++,pageClick()">下一页</a></li>
        <li v-if="cur == all"><a class="banclick">下一页</a></li>
        <li><a>共<i>{{all}}</i>页</a></li>
      </ul> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import DiGui from '@/api/digui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      // all: 8,
      // cur: 1,
      // showList: ['第一页', '第二页', '第三页', '第四页', '第五页', '第六页', '第七页', '第八页'],
      // showData: [[1, [1, 2, 3, [3, 2, 1]], 2, 3], 4, 5, [7, 5, 2, 8], [[1, 2, 3], [4, 9], [4, 5, [6, 3], 6]]],
      // arr: [],
      // num: 0
        // {name:'haah'},
        // {
        //   name:'zhangsan',
        //   value: [
        //     {
        //       name: 'lisi',
        //     }
        //   ]
        // }
      // ]
    }
  },
  methods: {
    // btnClick: function (data) {
    //   if (data !== this.cur) {
    //     this.cur = data
    //   }
    // },
    // pageClick: function () {
    //   console.log('现在在' + this.cur + '页')
    // },
    // add (index) {
    //   // this.showList.push({value:'1234'})
    //   // console.log(this.showData)
    //   // console.log(this.showData instanceof String)
    //   // console.log(this.num)
    //   console.log(DiGui(this.showData, this.arr, this.num))
    //   // console.log(this.fun(index))
    // },
    // fun: function (num) {
    //   if (num < 1) {
    //     return 1
    //   } else {
    //     return num * this.fun(num - 1)
    //   }
    // }
  },
  computed: {
    // indexs: function () {
    //   var left = 1
    //   var right = this.all
    //   var ar = []
    //   if (this.all >= 5) {
    //     if (this.cur > 3 && this.cur < this.all - 2) {
    //       left = this.cur - 2
    //       right = this.cur + 2
    //     } else {
    //       if (this.cur <= 3) {
    //         left = 1
    //         right = 5
    //       } else {
    //         right = this.all
    //         left = this.all - 4
    //       }
    //     }
    //   }
    //   while (left <= right) {
    //     ar.push(left)
    //     left++
    //   }
    //   return ar
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  text-align: center;
  line-height: 200px;
  width: 400px;
  height: 200px;
  border: 1px solid red;
  margin-bottom: 20px;
}
.page-bar{
  margin:40px;
}
ul,li{
  margin: 0px;
  padding: 0px;
}
li{
  list-style: none
}
.page-bar li:first-child>a {
  margin-left: 0px
}
.page-bar a{
  border: 1px solid #ddd;
  text-decoration: none;
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  cursor: pointer
}
.page-bar a:hover{
  background-color: #eee;
}
.page-bar a.banclick{
  cursor:not-allowed;
}
.page-bar .active a{
  color: #fff;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
}
.page-bar i{
  font-style:normal;
  color: #d44950;
  margin: 0px 4px;
  font-size: 12px;
}
</style>
