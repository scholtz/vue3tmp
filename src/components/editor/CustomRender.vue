<script lang="ts">
import draggable from 'vuedraggable'
import Button from 'primevue/button'
import Panel from 'primevue/panel'

import { defineComponent, compile, h, cloneVNode } from 'vue'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'

export default defineComponent({
  props: {
    selectedValue: Object,
    fields: Object
  },
  // computed: {
  //   model2() {
  //     const ret = this.selectedValue ?? {}
  //     //const unfieldFields = this.fields.find((element) => ret[element.property] === undefined)
  //     // this.fields.forEach((element) => {
  //     //   if (ret[element.property] === undefined) {
  //     //     ret[element.property] = ''
  //     //   }
  //     // })

  //     for (var field of this.fields) {
  //       if (this.selectedValue) {
  //         const prop = field.property
  //         //prop in this.selectedValue ? console.log('ret', ret) : console.log('ret', ret)
  //         // if (!(field.property in this.selectedValue)) {
  //         //     //ret[field.property] = ''
  //         //   console.log('ret', ret)
  //         // }
  //       }
  //     }
  //     console.log('ret', ret)
  //     return ret
  //   }
  // },
  methods: {
    templateHtml() {
      let ret = '<div class="p-fluid" v-if="modelValue">'
      this.fields.forEach((element) => {
        if (element.property) {
          switch (element.type) {
            case 'InputText':
              ret += `<div class="p-field mb-2"><label for="${element.property}">${element.name.sk}</label><${element.type} id="${element.property}" type="text" v-model="modelValue.${element.property}" /></div>`
              break
            case 'CheckBox':
              ret += `<div class="p-field mb-2"><Checkbox :inputId="${element.property}" :name="${element.property}"  :binary="true" v-model="modelValue.${element.property}" /><label for="${element.property}" class="ml-2">${element.name.sk}</label></div>`
              break
          }
        }
      })
      ret += '</div>'
      console.log('templateHtml', ret)
      return ret
    }
  },
  render() {
    const r = {
      props: ['modelValue'],
      emits: ['update:modelValue'],
      components: {
        InputText,
        Checkbox
      },
      template: `<div>${this.templateHtml() || ''}</div>`
    }
    return h(r, {
      modelValue: this.selectedValue,
      'onUpdate:modelValue': (value) => {
        console.log('onUpdate:modelValue', value)
        this.$emit('update:modelValue', value)
      }
    })
  }
})
</script>
