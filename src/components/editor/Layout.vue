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
  emits: ['onSelectedItem'],
  methods: {
    onClick(element) {
      this.$emit('onSelectedItem', element)
    }
  }
})
</script>

<template>
  <Panel header="Page layout" class="mr-1 mb-1">
    <draggable class="" :list="fields" group="people" item-key="type">
      <template #item="{ element }">
        <Button
          :label="`${element.type} : ${element.name.sk}`"
          @click="(e) => onClick(element)"
          class="mr-2 mb-2 block"
        />
      </template>
    </draggable>
  </Panel>
</template>
