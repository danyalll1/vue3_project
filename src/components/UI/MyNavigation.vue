<template>
<div class="nav-bar">
  <div class="container">
    <my-button-black class="nav-btn" @click="$router.push('/')">Tiles</my-button-black >
    <MyButtonBlack class="nav-btn" @click="$router.push('/List')">List</MyButtonBlack>
    <MyButtonBlack class="nav-btn" @click="$router.push('/Form')">Form</MyButtonBlack>
  </div>
</div>
</template>

<script>
export default {
  name: "MyNavigation"
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 3000;
  left:0;
  position: fixed;
  width: 200px;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
}

.container{
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.nav-btn
{
  margin-top: 50px;
}
</style>