<template>
  <v-app>
    <v-app-bar v-if="$store.state.appstate" app fixed color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="bg_color">
      <v-container>
        <nuxt ref="curPage" />
        <notification-component ref="notificationRef"></notification-component>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import notificationComponent from "~/components/notification.vue";
export default {
  components: {
    notificationComponent,
  },
  data() {
    return {
      title: "nuxt boilerplate"
    };
  }
};
</script>

<style>
  .bg_color{
    background: aliceblue;
  }
</style>
