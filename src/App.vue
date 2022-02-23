<script setup lang="ts">
import { ref, reactive } from 'vue'

const theme = ref('dark')
const themes = reactive([
  { label: '深色', value: 'dark' },
  { label: '浅色', value: 'linght' },
  { label: '粉色', value: 'pink' }])
</script>

<template>
  <header>
      <select
          v-model="theme">
        <option
            v-for="(theme,i) in themes"
            :label="theme.label"
            :value="theme.value"
            :key="`${theme}${i}`"
        >
        </option>
      </select>
  </header>

  <main>
    <div :class="theme"
    >
      This is a test passage
    </div>
  </main>

  <footer>

  </footer>

</template>

<style lang="scss">

</style>