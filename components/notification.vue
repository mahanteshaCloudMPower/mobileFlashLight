<template>
  <v-snackbar
          :timeout="timeout"
          :bottom="true"
          :color="color"
          v-model="snackbar"
          ref="notificationRef"
  >
    {{ msg }}
    <v-btn text color="white" @click.native="snackbar = false">close</v-btn>
  </v-snackbar>
</template>
<script>
    export default {
        data(){
            return{
                timeout: 5000,
                top: true,
                right: true,                           
                snackbar : false,
                color : '',
                msg : ''
            }
        }
    }
</script>
<style>

</style>

