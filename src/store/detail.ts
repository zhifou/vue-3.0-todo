import { defineStore } from "pinia";

export const useDetailStore = defineStore("detail", {
    state: () => ({
        detail: {},
    }),
    getters: {
        userName: () => "zhifou",
    },
});
