<template>
<button class="btn-black"><slot></slot></button>
</template>

<script>
export default {
  name: "MyButtonBlack"
}
</script>

<style scoped>
.btn-black{
  font-family: 'Gothic A1', sans-serif;;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  width: 100px;
  height: 50px;
  color: white;
  background: #000000;
  border-radius: 16px;
  transition: ease-in-out 0.25s;
}
.btn-black:hover{
  transition: ease-in-out 0.25s;
  background-color: white;
  color: black;
}
</style>