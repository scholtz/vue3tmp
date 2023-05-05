<script setup lang="ts">
import draggable from 'vuedraggable'
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import Divider from 'primevue/divider'
import CheckBox from '@/components/ui/CheckBox.vue'

import { defineComponent, compile, h, cloneVNode, computed } from 'vue'

const props = defineProps<{
  showCreateForm: boolean
  showEditForm: boolean
  showTable: boolean
}>()

const components = [
  {
    name: {
      sk: ''
    },
    property: '',
    type: 'InputText',
    typeProps: {
      type: 'Text'
    },
    showCreateForm: true,
    showEditForm: true,
    showTable: true
  },
  {
    name: {
      sk: ''
    },
    property: '',
    type: 'CheckBox',
    typeProps: {},
    showCreateForm: true,
    showEditForm: true,
    showTable: true
  }
]

const emit = defineEmits(['onShowCreateForm', 'onShowEditForm', 'onShowTable'])
const showCreateFormValue = computed({
  get() {
    return props.showCreateForm
  },
  set(val) {
    emit('onShowCreateForm', val)
  }
})

const showEditFormValue = computed({
  get() {
    return props.showEditForm
  },
  set(val) {
    emit('onShowEditForm', val)
  }
})

const showTableValue = computed({
  get() {
    return props.showTable
  },
  set(val) {
    emit('onShowTable', val)
  }
})

function cloneItem(element) {
  console.log('element')
  return JSON.parse(JSON.stringify(element))
}
</script>

<template>
  <Panel header="Components" class="mr-1 mb-1">
    <Checkbox :binary="true" />
    <draggable
      class="dragArea list-group"
      :list="components"
      :group="{ name: 'people', pull: 'clone', put: true }"
      item-key="name"
      :clone="cloneItem"
    >
      <template #item="{ element }">
        <Button :label="element.type" class="block mr-2 mb-2" />
      </template>
    </draggable>
    <Divider></Divider>
    <CheckBox
      v-model="showCreateFormValue"
      id="showCreateForm"
      text="Show Create form"
      class="mr-2 mb-2"
    />
    <CheckBox
      v-model="showEditFormValue"
      id="showEditForm"
      text="Show Edit form"
      class="mr-2 mb-2"
    />
    <CheckBox v-model="showTableValue" id="showTable" text="Show Table" class="mr-2 mb-2" />
  </Panel>
</template>
