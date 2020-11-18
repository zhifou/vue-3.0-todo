/**第一个版本swr */
// let cache: any = {};
// export const swr = (key: string, promise: Promise<any>) => {
//     if (cache[key]) return cache[key];
//     return promise.then((response: any) => {
//         cache = {...cache, [key]: response};
//         return response;
//     }).catch((err: Error) => {
//         throw new Error(err.message);
//     });
// }

/**第二个版本swr */
// import { ref, readonly, reactive } from 'vue';
// let cache: any = {};
// export const swr = (key: string, promise: Promise<any>) => {
//     const data = ref(cache[key] || null);

//     if (cache[key]) return cache[key];
//     promise.then((response: any) => {
//         cache = {...cache, [key]: response};
//         data.value = respcdonse;
//     }).catch((err: Error) => {
//         throw new Error(err.message);
//     });
//     return readonly(data);
// }

/**第三个版本swr */
import { reactive, readonly, toRefs, watchEffect } from 'vue';
const cache: any = {};
export const swr = (key: string, promise: Promise<any>, initialValue: any = null) => {
    const state = reactive({
        data: (cache[key] ? cache[key] : null) || (localStorage.getItem(`swr-${key}`)
            ? JSON.parse(localStorage.getItem(`swr-${key}`))
            : initialValue),
        isRevalidating: true,
        isError: false,
        error: null,
    });
    promise.then((response: any) => {
        cache[key] = response;
        state.data = response;
        state.isRevalidating = false;
    })
    .catch((err: Error) => {
        state.isRevalidating = false;
        state.isError = true;
        state.error = err.message;
    });
    watchEffect(() => {
        try {
            localStorage.setItem(`swr-${key}`, JSON.stringify(state.data));
        }
        catch(err) {
            console.log(err);
        };
    });
    return readonly(toRefs(state));
}