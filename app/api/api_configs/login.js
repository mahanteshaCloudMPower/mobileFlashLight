export default {
    method: "post",
    apiUrl: "login",
    data: { "userName": String, "password": String },
    options: { "headers": { "content-type": "application/json" } },

    timeout: 5000,
    successExecutionList: {
        change_state: false,
        navigation: false,
        callback: true,
        notification: false,
        store: true

    },
    errorExecutionList: {
        change_state: false,
        navigation: false,
        callback: true,
        notification: true,
        store: false
    },

    successNavigateTo: "",
    errorNavigateTo: "",

    successCallback: function () { },
    errorCallback: function () { },

    successNotificationMsg: "Login Successful!",
    errorNotificationMsg: "",

    storageReferenceName: "login_",
    storageFunctionName: "login/setUserInfo",

    stateName: "appState",
    successState: true,
    errorState: false,
}