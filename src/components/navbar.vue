<template>
    <div class="nav-bar">
        <router-link to="/todo" :class="{ active: active === 'todo' }">
            待办事宜{{count ? `(${count})` : ''}}
        </router-link>
        <router-link to="/swr" :class="{ active: active === 'swr' }">
            SWR测试
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar',
    props: {
        count: Number,
        active: String
    }
})
</script>

<style>
    .nav-bar {
        display: flex;
        justify-content: space-around;
        background: #eee;
    }
</style>