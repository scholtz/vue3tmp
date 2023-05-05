<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import MultiSelect from 'primevue/multiselect'
import InputText from 'primevue/inputtext'
import draggable from 'vuedraggable'
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import Pallete from '@/components/editor/Pallete.vue'
import Layout from '@/components/editor/Layout.vue'
import ComponentConfig from '@/components/editor/ComponentConfig.vue'
import CreateForm from '@/components/editor/CreateForm.vue'
import EditForm from '@/components/editor/EditForm.vue'
import Table from '@/components/editor/Table.vue'

import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row'
import { defineComponent, compile, h, cloneVNode, computed, ref, reactive } from 'vue'

const selectedColumns = [{ field: 'code', header: 'Header' }]

const state = reactive({
  selectedItem: null,
  selectedValue: null,
  columns: [],
  showCreateForm: false,
  showEditForm: true,
  showTable: true,
  newValue: null,
  fields: [
    {
      name: {
        sk: 'First name'
      },
      property: 'firstname',
      type: 'InputText',
      typeProps: {
        type: 'Text'
      }
    },
    {
      name: {
        sk: 'Last name'
      },
      property: 'lastname',
      type: 'InputText',
      typeProps: {
        type: 'Text'
      }
    },
    {
      name: {
        sk: 'x'
      },
      property: 'x',
      type: 'InputText',
      typeProps: {
        type: 'Text'
      }
    },
    {
      name: {
        sk: 'bool'
      },
      property: 'bool',
      type: 'CheckBox',
      typeProps: {}
    }
  ],
  products: [
    {
      firstname: '1',
      lastname: 2,
      x: 'x',
      bool: true
    },
    {
      firstname: 'š',
      lastname: 2,
      x: 'x',
      bool: false
    }
  ]
})

const validateItemForFields = function (item) {
  const ret = item ?? {}
  state.fields.forEach((element) => {
    if (element.property && !(element.property in ret)) {
      ret[element.property] = ''
    }
  })
  return ret
}

const mounted = function () {
  state.newValue = validateItemForFields({})
}

const onToggle = function () {
  console.log('onToggle')
}
const cloneItem = function (element) {
  console.log('element')
  return JSON.parse(JSON.stringify(element))
}
const onSelectedItem = function (item) {
  state.selectedItem = item
  console.log('state.selectedItem', state.selectedItem)
}
const onSelectedValue = function (item) {
  item = validateItemForFields(item)
  state.selectedValue = item
  console.log('onSelectedValue', this)
}
const onShowCreateForm = function (val) {
  state.showCreateForm = val
}
const onShowEditForm = function (val) {
  state.showEditForm = val
}
const onShowTable = function (val) {
  state.showTable = val
}
const onSelectedItemUpdate = function (item) {
  state.selectedValue = item
}
</script>

<template>
  <div class="flex flex-column flex-grow">
    <Panel header="Form editor">
      <div class="flex flex-grow flex-row">
        <Pallete
          :showCreateForm="state.showCreateForm"
          :showEditForm="state.showEditForm"
          :showTable="state.showTable"
          @onShowCreateForm="onShowCreateForm"
          @onShowEditForm="onShowEditForm"
          @onShowTable="onShowTable"
        ></Pallete>
        <Layout :fields="state.fields" @onSelectedItem="onSelectedItem"></Layout>
        <ComponentConfig
          v-if="state.selectedItem"
          :selectedItem="state.selectedItem"
          @onSelectedItemUpdate="onSelectedItemUpdate"
        ></ComponentConfig>
        <CreateForm
          v-if="state.showCreateForm"
          :fields="state.fields"
          :selectedValue="state.newValue"
        ></CreateForm>
        <EditForm
          v-if="state.showEditForm && state.selectedValue"
          :fields="state.fields"
          :selectedValue="state.selectedValue"
        ></EditForm>
        <Table
          v-if="state.showTable"
          :data="state.products"
          :fields="state.fields"
          :selectedValue="state.selectedValue"
          @onSelectedValue="onSelectedValue"
        ></Table></div
    ></Panel>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
