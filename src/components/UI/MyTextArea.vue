<template>
<textarea class="MyTextArea"
          :value="modelValue"
          @input="updateInput"
          >
</textarea
    >

</template>

<script>
export default {
  name: "MyTextarea",
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

.MyTextArea {
  resize: none;
  padding: 3% 3% 3% 3%;
  font-family: 'Gothic A1', sans-serif;;
  font-weight: 400;
  font-size: 20px;
  width: 100%;
  height: 100%;

  border: none;
  background-color: rgba(255,255,255, 1);
  box-shadow: 3px 3px 6px rgba(200, 200, 200, 0.8), -3px 3px 6px rgba(200, 200, 200, 0.8) ;;
  border-radius: 16px;
  transition: all ease-in-out 0.4s;
}

.MyTextArea:focus{
  transition: all ease-in-out 0.4s;
  color: black;
  background-color: lightcyan;
  border-color: black;
  outline: white;
}
</style>