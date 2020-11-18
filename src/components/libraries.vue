import { computed } from 'vue';
<template>
    <p v-if="isError">An error has occurred: {{error}}</p>
    <p v-else-if="isLoading">Loading ...</p>
    <ul v-else>
      <li v-for="lib in data" :key="lib.name" @click="select(lib.name)">{{lib.name}}</li>
    </ul>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { swr } from '../hooks/swr';

export default {
  setup(props, { emit }) {
      const list = swr(
          'list',
          fetch('https://api.cdnjs.com/libraries')
            .then((response: any) => response.json())
            .then((data: any) => data.results),
          []
      );
      const isLoading = computed(() => !list.data.length && list.isRevalidating);
      const isError = computed(() => list.isError);
      const error = computed(() => list.error);
      const data = computed(() => list.data);
      const select = (name: string) => {
        console.log('libraries', name);
        emit('select', name);
      };
      return { isLoading, isError, error, data, select };
  }
};
</script>
