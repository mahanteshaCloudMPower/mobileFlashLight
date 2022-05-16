<template>
  <div class="text-center">
    <v-card class="ma-5 mt-16 pa-6">
      <video id="video" width="720" height="540" autoplay muted></video>
      <!-- <button class="switch">Click to turn ON Flash Light</button> -->
      <switch id="switch" width="720" height="540" autoplay muted></switch>
      <v-btn rounded color="primary" dark @click="loadCamera">
        Turn off Light
      </v-btn>
      <!-- <v-btn rounded color="primary" dark @click="reloadCamera">
        Turn on Light
      </v-btn> -->
      <button class="switch">On / Off</button>
      <v-btn rounded color="primary" dark @click="offCamere"> flash off </v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // showCamera: true,
    };
  },
  created() {
    // this.test();
  },
  methods: {
    loadCamera() {
      const constraints = this.backCamera
        ? { video: { facingMode: "environment" } }
        : { video: true };
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        console.log("test start");
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
          console.log("stream", stream);

          const videoPlayer = document.querySelector("video");
          console.log("videoPlayer", videoPlayer);
          videoPlayer.srcObject = stream;
          console.log("videoPlayer", videoPlayer.srcObject);
          videoPlayer.play();
          console.log("videosPlayer", videoPlayer.play());
        });
      }
    },
    offCamere() {
      var videoElem = document.querySelector("video");
      console.log("videoElem", videoElem);
      if (videoElem.srcObject) {
        console.log("videoElem.srcObject", videoElem.srcObject);
        const stream = videoElem.srcObject;
        console.log("strem", stream);
        const tracks = stream.getTracks();
        console.log("track", tracks);

        tracks.forEach(function (track) {
          track.stop();
        });
        videoElem.srcObject = null;
      }
    },
  },
};
</script>
<style scoped></style>

