import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Shows from '@/components/Shows'
// import News from '@/components/News'
import Music from '@/components/Music'
import Band from '@/components/Band'
import Press from '@/components/Press'
import Contact from '@/components/Contact'
import Street from '@/components/Street'
import Merch from '@/components/Merch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shows',
      name: 'Shows',
      component: Shows
    },
    // {
    //   path: '/news',
    //   name: 'News',
    //   component: News
    // },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/band',
      name: 'Band',
      component: Band
    },
    {
      path: '/press',
      name: 'Press',
      component: Press
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/street',
      name: 'Street',
      component: Street
    },
    {
      path: '/merch',
      name: 'Merch',
      component: Merch
    }
  ]
})
