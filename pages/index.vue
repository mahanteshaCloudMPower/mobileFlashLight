<template>
  <section class="container pt">
    <v-row class="fill-height" align-content="center" justify="center">
      <v-col class="subtitle-1 text-center" cols="12"> {{ title }} </v-col>
      <v-col cols="6">
        <v-progress-linear
          color="deep-purple accent-4"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: "Welcome to Nuxt Boiler Plate",
    };
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.$router.push("/lightTest");
    }, 1500);
  },
  methods: {},
};
</script>
<style>
.pt {
  padding-top: 37vh;
}
</style>
