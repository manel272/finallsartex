<template>
  <div id="app">
    <Header v-if="displayHeader()" />
       <div  v-bind:class="displayHeader() ? 'router-view' : '' ">
          <router-view></router-view>
       </div> 
    <Footer v-if="displayFooter()" />
  </div>
  </template>

  <script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    currentRoute() {
      return this.$route.path
    }
  },
  methods: {
    displayHeader() {
      const routes = ['/', '/signup','/forgot-password','/createproduct','/createcustomer','/orderfabrication']
      if (routes.includes(this.currentRoute)) {
        return false
      } else {
        return true
      }
    },
    displayFooter() {
      const routes = ['/', '/signup','/forgot-password','/client','/machine']
      if (routes.includes(this.currentRoute)) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
