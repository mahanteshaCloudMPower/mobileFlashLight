
exports.AppNotification = {
  getNotificationHandler: function () {
    return this.showNotification.bind(this);
  },
  showNotification: function (msgObj) {
    window.$nuxt.$children[$nuxt.$children.length - 1].$refs.notificationRef.color =
      msgObj.notificationText;
    window.$nuxt.$children[$nuxt.$children.length - 1].$refs.notificationRef.msg =
      msgObj.notificationMessage;
    window.$nuxt.$children[$nuxt.$children.length - 1].$refs.notificationRef.snackbar = true;
  }
};