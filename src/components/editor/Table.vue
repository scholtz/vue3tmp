<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import MultiSelect from 'primevue/multiselect'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import draggable from 'vuedraggable'
import Button from 'primevue/button'
import Panel from 'primevue/panel'

import { defineComponent, compile, h, cloneVNode, ref, computed, reactive } from 'vue'

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

const state = reactive({
  editingRows: []
})
const onRowEditSave = (event) => {
  let { newData, index } = event
  props.data[index] = newData
}
//
</script>

<template>
  <DataTable
    v-model:selection="selectedValueValue"
    selectionMode="single"
    stripedRows
    :value="data"
    tableStyle="min-width: 50rem"
    editMode="row"
    dataKey="id"
    v-model:editingRows="state.editingRows"
    @row-edit-save="onRowEditSave"
  >
    <Column
      v-for="(col, index) of fields"
      :field="col.property"
      :header="col.name.sk"
      :key="col.property + '_' + index"
    >
      <template #editor="{ data, field }" v-if="col.type == 'InputText'">
        <InputText v-model="data[field]" />
      </template>
      <template #editor="{ data, field }" v-if="col.type == 'CheckBox'">
        <Checkbox v-model="data[field]" :binary="true" />
      </template>
      <template #body="{ data, field }" v-if="col.type == 'CheckBox'">
        <Checkbox v-model="data[field]" :binary="true" :disabled="true" />
      </template>
      <template #body="slotProps" v-if="col.type == 'Actions'">
        <Button rounded text size="small" v-if="col.typeProps && col.typeProps.edit" class="mr-1">
          <i v-if="col.typeProps.edit.i" :class="col.typeProps.edit.i"></i>
        </Button>
        <Button rounded text size="small" v-if="col.typeProps && col.typeProps.delete" class="mr-1">
          <i v-if="col.typeProps.delete.i" :class="col.typeProps.delete.i"></i>
        </Button>
      </template>
    </Column>
    <Column :rowEditor="true" style="min-width: 8rem" bodyStyle="text-align:center"></Column>
  </DataTable>
</template>
