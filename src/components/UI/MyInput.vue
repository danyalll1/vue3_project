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
  border: none;
  background-color: rgba(255,255,255, 0.3);
  box-shadow: 3px 3px 6px rgba(200, 200, 200, 0.8), -3px 3px 6px rgba(200, 200, 200, 0.8) ;
  border-radius: 16px;
  transition: all ease-in-out 0.4s;
}

.MyInputWhite:focus{
  transition: all ease-in-out 0.4s;
  color: white;
  background-color: lightblue;
  border-color: white;
  outline: white;
}








</style>