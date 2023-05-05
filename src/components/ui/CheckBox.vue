<script setup lang="ts">
import Checkbox from 'primevue/checkbox'
import { computed, ref } from 'vue'

const props = defineProps<{
  text: string
  id: string
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])
const checkboxValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <div class="flex align-items-center">
    <Checkbox v-model="checkboxValue" :inputId="id" :name="id" :binary="true" />
    <label :for="id" class="ml-2"> {{ text }} </label>
  </div>
</template>
