<script setup lang="ts">
import draggable from 'vuedraggable'
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import { defineComponent, compile, h, cloneVNode, computed } from 'vue'
import InputText from 'primevue/inputtext'

const props = defineProps<{
  selectedItem: any
}>()
const isNumeric = (val: string): boolean => {
  return !isNaN(Number(val))
}

const onUpdateProperty = (e) => {
  if (isNumeric(e)) {
    props.selectedItem.property = '' // property cannot start with number
  }
  console.log('onUpdateProperty', e)
}
</script>

<template>
  <Panel header="Component configuration" v-if="selectedItem" class="mr-1 mb-1">
    <div class="p-fluid">
      <div class="p-field">
        <label for="componentText">Text</label>
        <InputText id="componentText" v-model="selectedItem.name.sk"></InputText>
      </div>
      <div class="p-field">
        <label for="componentProperty">Property</label>
        <InputText
          v-model="selectedItem.property"
          @update:modelValue="onUpdateProperty"
        ></InputText>
      </div>
    </div>
  </Panel>
</template>
