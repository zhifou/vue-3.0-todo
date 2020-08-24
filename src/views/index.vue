<template>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <div><a href="#/todo">待办事宜</a></div>
</template>

<script lang="ts">
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
