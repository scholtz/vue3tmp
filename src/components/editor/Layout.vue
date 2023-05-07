<script lang="ts">
import draggable from 'vuedraggable'
import Button from 'primevue/button'
import Panel from 'primevue/panel'

import { defineComponent, compile, h, cloneVNode } from 'vue'

export default defineComponent({
  props: {
    fields: []
  },
  components: {
    draggable,
    Button,
    Panel
  },
  emits: ['onSelectedItem', 'onDeleteSelectedItem'],
  methods: {
    onClick(element) {
      this.$emit('onSelectedItem', element)
    },
    onDeleteItem(element) {
      this.$emit('onDeleteSelectedItem', element)
    }
  }
})
</script>

<template>
  <Panel header="Page layout" class="mr-1 mb-1">
    <draggable class="" :list="fields" group="people" item-key="type">
      <template #item="{ element }">
        <div class="flex flex-row">
          <Button
            :label="`${element.type} : ${element.name.sk}`"
            @click="(e) => onClick(element)"
            class="mr-2 mb-2 block flex-grow-1"
          />
          <Button label="X" @click="(e) => onDeleteItem(element)" class="mr-2 mb-2 block" />
        </div>
      </template>
    </draggable>
  </Panel>
</template>
