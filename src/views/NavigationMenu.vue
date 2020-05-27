<template>
  <v-navigation-drawer width="250" height="1200" dark permanent>
    <v-list dense nav class="py-0">
      <v-list-item v-for="menu in menuItems" :key="menu.title" link>
        <v-expansion-panels>
          <v-expansion-panel >
            <v-expansion-panel-header hide-actions>
              <v-list-item-icon>
                <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-xs-left">
                <v-list-item-title>{{ menu.title }}</v-list-item-title>
              </v-list-item-content>
              <v-icon v-if="menu.subItems.length>0" small >mdi-chevron-down</v-icon>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list>
                 <v-list-item   v-for="subItem in menu.subItems" :key="subItem" >
                    <v-list-item-content style="cursor:pointer" @click="navigateToRoute(subItem.path)">
                    <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                    </v-list-item-content>
                 </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: "Home", icon: "mdi mdi-home", subItems: [] },
        {
          title: "Student",
          icon: "mdi mdi-account",
          subItems: [{ title: "Student List",path:"/studentList" }, { title: "Add Student",path:"/addStudent" }]
        }
      ]
    };
  },
  methods:{
    navigateToRoute(path){
        this.$router.push(path)
    }
  }
};
</script>

<style >
 li a {
    text-decoration: none;
}
</style>