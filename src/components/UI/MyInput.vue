<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="MyInputWhite" type="text">
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.MyInputWhite {
  padding: 0 10px 0 10px;
  font-family: 'Gothic A1', sans-serif;;
  font-weight: 400;
  font-size: 20px;
  width: 90%;
  height: 50px;
  margin: 5px;
  border: solid black 2px;
  border-radius: 16px;
}








</style>