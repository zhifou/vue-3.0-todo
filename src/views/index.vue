<template>
    <NavBar @count="state.count" @active="state.active"/>
</template>

<script lang="ts">
import NavBar from '../components/navbar.vue';
import { reactive } from 'vue';

export default {
  name: "App",
  components: {
    NavBar
  },
  setup(props, context) {
    const state = reactive({
      count: 5,
      active: 'swr'
    });

    return {
      state
    }
  }
};
</script>
