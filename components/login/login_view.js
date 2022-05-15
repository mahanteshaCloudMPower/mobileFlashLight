export default {
  name: 'loginView',

  data: function () {
    return {
      msg: 'Hello there, please login',
      userName: '',
      password: '',
      passwordType: 'password',
      passwordToggle: true,
      rules: {
        requiredUsername: value =>
          !!value || 'username is required and cannot be empty.',
        requiredPassword: value =>
          !!value || 'password is required and cannot be empty.'
      }
    };
  },

  created: function () {
    // this.checkUser();
  },

  mounted: function () {
    this.checkUser();
  },
  methods: {
    checkUser: function () {
      let un = localStorage.getItem('gtusername');
      let pswd = localStorage.getItem('gtpassword');
      this.userName = un || '';
      this.password = pswd || '';
    },
    loginFormSubmit: function (event) {
      if (!this.userName) {
        this.$refs.userNameRef.validate(true);
        return;
      }
      if (!this.password) {
        this.$refs.passwordRef.validate(true);
        return;
      }
      let loginConfig = this.$config.get("login");
      loginConfig.data.userName = this.userName.toLowerCase();
      loginConfig.data.password = this.password;
      loginConfig.successCallback = this.loginSuccessCallback.bind(this);
      loginConfig.errorCallback = this.loginErrorCallback.bind(this);
      this.$responseManager.execute(loginConfig);
    },
    loginSuccessCallback: function () {
      localStorage.setItem('gtusername', this.userName);
      localStorage.setItem('gtpassword', this.password);
      this.$emit('loginSuccessEvent', this.$store.state.loginStore.userInfo);
    },
    loginErrorCallback: function () {
      console.log('error login');
    }
  }
}

