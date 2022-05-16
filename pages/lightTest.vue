<template>
  <div class="text-center">
    <v-card class="ma-5 mt-16 pa-6">
      <video id="video" width="720" height="540" autoplay muted></video>
      <!-- <button class="switch">Click to turn ON Flash Light</button> -->
      <switch id="switch" width="720" height="540" autoplay muted></switch>
      <!-- <video id="video" width="720" height="540" autoplay muted></video> -->
      <!-- <v-btn rounded color="primary" dark @click="loadCameraOff">
        Turn off Light
      </v-btn> -->
      <v-btn rounded color="primary" dark @click="reloadCamera">
        Turn on Light
      </v-btn>
      <button class="switch">On / Off</button>
      <v-btn rounded color="primary" dark @click="flashOn"> flash on </v-btn>
    </v-card>
  </div>
</template>
<script>
const SUPPORTS_MEDIA_DEVICES = "mediaDevices" in navigator;
export default {
  data() {
    return {
      showCamera: true,
    };
  },
  created() {
    // this.test();
  },
  methods: {
    reloadCamera() {
      if (SUPPORTS_MEDIA_DEVICES) {
        //Get the environment camera (usually the second one)
        navigator.mediaDevices.enumerateDevices().then((devices) => {
          const cameras = devices.filter(
            (device) => device.kind === "videoinput"
          );

          if (cameras.length === 0) {
            throw "No camera found on this device.";
          }
          const camera = cameras[cameras.length - 1];

          // Create stream and get video track
          navigator.mediaDevices
            .getUserMedia({
              video: { facingMode: "environment" },
            })
            .then((stream) => {
              const track = stream.getVideoTracks()[0];
              const videoPlayer = document.querySelector("video");
              videoPlayer.srcObject = stream;
              // videoPlayer.play();
              //Create image capture object and get camera capabilities
              const imageCapture = new ImageCapture(track);
              const photoCapabilities = imageCapture
                .getPhotoCapabilities()
                .then(() => {
                  //todo: check if camera has a torch

                  //let there be light!
                  const btn = document.querySelector(".switch");
                  btn.addEventListener("click", function () {
                    track.applyConstraints({
                      advanced: [{ torch: true }],
                    });
                  });
                });
              videoPlayer.play();
              console.log("photoCapabilities", photoCapabilities);
            });
        });

        //The light will be on as long the track exists
      }
    },
    flashOn() {
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
