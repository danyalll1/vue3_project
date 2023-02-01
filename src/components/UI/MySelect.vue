<template>
    <select  @change="changeHandler" class="select">
      <option disabled value = ' '>Pick from list</option>
      <option v-for="option in options "
              :key="option.value"
              :value="option.value"
      >
        {{option.name}}
      </option>
    </select>
</template>

<script>
export default {
  name: "MySelect",
  props:{
    modelValue:{
      type: String
    },
    options:{
      type: Array,
      default: () => []
    },

  },
  methods:{
    changeHandler(event){
      this.change=event.target.value
      this.$emit('update:modelValue',event.target.value)
    },
  }
}
</script>

<style scoped>
  .select{
    margin-left: 10px;
  }
</style>