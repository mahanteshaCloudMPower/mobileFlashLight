export const state = () => ({
    loginCred: {
        userName: "",
        password: ""
    },
    loginTime: { timestamp: 0, timeZone: "" },
    userInfo: {},
    loginInfoSent: {}
});

export const mutations = {
    setLoginCred(state, data) {
        state.loginCred = data;
    },
    setUserInfo(state, data) {
        state.userInfo = data;
    },
    setLoginInfoSent(state, data) {
        state.loginInfoSent = data;
    },
    //    ------------------------------
    clearLoginStorage(state) {
        for (const prop in state) {
            state[prop] = "";
        }
    }
};
