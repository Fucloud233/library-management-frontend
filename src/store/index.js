import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            hasLogged: false,
            userInfo: {
                id: undefined,
                privilege: undefined,
            },
        };
    },
});

export default store;
