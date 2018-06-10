<template>
  <div id="app">
    <header>
      <!-- <div class="img-container">
        <img src="./assets/img/headerlogo.png"/>
      </div> -->

      <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-brand><img class="brand-image" src="./assets/img/headerlogo.png"/></b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item v-for="(item, index) in navItems" :key="item.name" :to="item.to" :active="index === selectedNavIndex" exact>{{item.name}}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <router-view/>
  </div>
</template>

<script>
import bNavbar from 'bootstrap-vue/src/components/navbar/navbar'

export default {
  name: 'app',
  data () {
    return {
      navItems: [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'Shows',
          to: '/shows'
        },
        {
          name: 'News',
          to: '/news'
        },
        {
          name: 'Music',
          to: '/music'
        },
        {
          name: 'Band',
          to: '/band'
        },
        {
          name: 'Press',
          to: '/press'
        },
        {
          name: 'Contact',
          to: '/contact'
        },
        {
          name: 'Street',
          to: '/street'
        },
        {
          name: 'Merch',
          to: '/merch'
        }
      ]
    }
  },
  computed: {
    selectedNavIndex: function () {
      for (var i = 0; i < this.navItems.length; i++) {
        if (this.$route.path === this.navItems[i].to) {
          return i
        }
      }
    }
  },
  components: {
    'b-navbar': bNavbar
  }
}
</script>

<style lang="less">
header {
  width: 100%;
  color: white;
  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
  background: url("assets/img/back.jpg"), #7b4397;
  position: sticky;
  top: 0;
  z-index: 100;
  // .img-container {
  //   text-align: center;
  //   > img {
  //     max-width: 100%;
  //     height: auto;
  //     display: inline-block;
  //   }
  // }
  .brand-image {
    width: 350px;
    max-width: 100%;
    height: auto;
  }
  // .navbar-collapse {
  //   justify-content: center;
  // }
}
html, body{
  height: 100%;
}
body {

}
#app {
  min-height: 100%;
  background-image: url("./assets/img/back.jpg");
  background-color: hsla(0,0%,100%,0.20);
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
