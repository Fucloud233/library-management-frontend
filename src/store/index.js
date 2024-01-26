import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            hasLogged: false,
            adminInfo: {},
        };
    },
    mutations: {
        login(state, adminInfo) {
            state.hasLogged = true;
            state.adminInfo = adminInfo;
        },
    },
});

export default store;
