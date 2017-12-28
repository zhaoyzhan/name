import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import DiGui from '@/components/compones/DiGuiCom/DiGui'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DiGui',
      component: DiGui
    }
  ]
})
