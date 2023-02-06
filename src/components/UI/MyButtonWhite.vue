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
  box-shadow: 3px 3px 10px rgba(50, 50, 50, 0.4), -3px 3px 10px rgba(50, 50, 50, 0.4) ;
  transition: ease-in-out 0.4s;
}
.btn-white:hover{
  color: white;
  transition: ease-in-out 0.4s;
  background-color: transparent ;
  backdrop-filter: saturate(0.5); /* контрастный background-color */





}
</style>