<template>
  <div id="app">
   <v-app> 
     <div class="header-section">
      <Header></Header>
    </div>
    <div class="navigation-menu-section">
      <NavigationMenu></NavigationMenu>
    </div>
    <div class="main-body-content">
       <InnerHeader></InnerHeader>
       <router-view />
    </div> 
   </v-app>          
  </div>
</template>
<script>
import InnerHeader from './views/InnerHeader'
import NavigationMenu from './views/NavigationMenu'
import Header from './views/Header'
export default {
  components:{
    NavigationMenu,
    Header,
    InnerHeader
  }
}
</script>
<style lang="less">
.navigation-menu-section{
  display: inline;
  min-width: 200px;
}
.main-body-content{
  min-width: 1350px;
  position: absolute;
  top:49px;
  left:250px
}
.header-section{

}

</style>
