<template>
  <button class="btn-white"><slot></slot></button>
</template>

<script>
export default {
  name: "MyButtonBlack"
}
</script>

<style scoped>
.btn-white{
  font-family: 'Gothic A1', sans-serif;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  width: 100px;
  height: 50px;
  color: black;
  background: white;
  border-radius: 16px;
  border:none;
  box-shadow: 3px 3px 10px rgba(200, 200, 200, 0.8), -3px 3px 10px rgba(200, 200, 200, 0.8) ;
  transition: ease-in-out 0.25s;
}
.btn-white:hover{
  transition: ease-in-out 0.25s;
  background-color: gray;
  color: white;
}
</style>