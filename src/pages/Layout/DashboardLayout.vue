<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">    

    <side-bar
      :sidebar-item-color="sidebarBackground"
      
    >
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>       
      </sidebar-link>
      <sidebar-link to="#">
        <md-icon>person</md-icon>      
      </sidebar-link>
      <sidebar-link to="">
        <md-icon>content_paste</md-icon>      
      </sidebar-link>
      <sidebar-link to="">
        <md-icon>library_books</md-icon>
       
      </sidebar-link>     
      <sidebar-link to="">
        <md-icon>location_on</md-icon>       
      </sidebar-link>    
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>

import DashboardContent from "./Content.vue";


export default {
  components: {
    // TopNavbar,
    DashboardContent,    
    // MobileMenu,
    // FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>
