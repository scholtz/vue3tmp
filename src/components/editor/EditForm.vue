<script setup lang="ts">
import draggable from 'vuedraggable'
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import CustomRender from '@/components/editor/CustomRender.vue'
import { defineComponent, compile, h, cloneVNode } from 'vue'
import InputText from 'primevue/inputtext'

const props = defineProps<{
  fields: any
  selectedValue: any
}>()
</script>

<template>
  <Panel header="Edit form" class="mr-1 mb-1">
    <CustomRender :selectedValue="selectedValue" :fields="fields" />
  </Panel>
</template>
