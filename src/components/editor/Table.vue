<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import MultiSelect from 'primevue/multiselect'
import InputText from 'primevue/inputtext'
import draggable from 'vuedraggable'
import Button from 'primevue/button'
import Panel from 'primevue/panel'

import { defineComponent, compile, h, cloneVNode, ref, computed } from 'vue'

const props = defineProps<{
  data: any
  fields: any
  selectedValue: any
}>()

const emit = defineEmits(['onSelectedValue'])
const selectedValueValue = computed({
  get() {
    return props.selectedValue
  },
  set(val) {
    emit('onSelectedValue', val)
  }
})
console.log('data', props.data)
</script>

<template>
  <Panel header="Table" class="mr-1 mb-1">
    <DataTable
      v-model:selection="selectedValueValue"
      selectionMode="single"
      stripedRows
      :value="data"
      tableStyle="min-width: 50rem"
    >
      <Column
        v-for="(col, index) of fields"
        :field="col.property"
        :header="col.name.sk"
        :key="col.property + '_' + index"
      ></Column>
    </DataTable>
  </Panel>
</template>
