<template>
  <v-app>
    <v-container fill-height>
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 md8 lg6>
          <v-card outlined>
            <v-card-text>
              <v-alert type="info" :value="true">Something went wrong....</v-alert>
              <NuxtLink to="/">Home page</NuxtLink>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  created: function() {
    console.error("error obj", this.error);
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  }
};
</script>

<style scoped lang="less">
h1 {
  font-size: 20px;
}
</style>
