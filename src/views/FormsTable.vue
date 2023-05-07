<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import Table from '@/components/editor/Table.vue'

import { useCounterStore } from '@/stores/counter'
import { mapState } from 'pinia'

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
      id: 1,
      name: {
        sk: 'Form name'
      },
      property: 'formName',
      type: 'InputText',
      typeProps: {
        type: 'Text'
      }
    },
    {
      id: 4,
      name: {
        sk: 'bool'
      },
      property: 'bool',
      type: 'CheckBox',
      typeProps: {}
    }
    // {
    //   name: {
    //     sk: 'Actions'
    //   },
    //   type: 'Actions',
    //   typeProps: {
    //     edit: {
    //       i: 'pi pi-pencil'
    //     },
    //     delete: {
    //       i: 'pi pi-times'
    //     }
    //   }
    // }
  ],
  products: [
    {
      id: 1,
      formName: '1'
    },
    {
      id: 2,
      formName: 'š'
    }
  ]
})

const store = useCounterStore()

const onSelectedValue = () => {}
onMounted(() => {
  store.initSetup()
})
</script>

<template>
  <main>
    <div>A{{ JSON.stringify(store.count) }}</div>
    <Button @click="store.increment()">Incr</Button>
    <Table
      v-if="state.showTable"
      :data="state.products"
      :fields="state.fields"
      :selectedValue="state.selectedValue"
      @onSelectedValue="onSelectedValue"
    ></Table>
  </main>
</template>
