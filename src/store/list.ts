import { ref } from "vue";
import { defineStore } from "pinia";

export const useListStore = defineStore("list", () => {
    const values: Array<string>[] = ref(["a", "b"]);

    const addTodo = (todo: string) => {
        values.value.push(todo);
    };
    return { values, addTodo };
});
