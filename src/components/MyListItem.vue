<template>



  <div class="list-item">
    <div class="list-item__wrap">
      <h1>{{MyItem.name}}</h1>
      <p>{{MyItem.body}}</p>
      <div class="button-container">
        <MyButtonBlack
            @click="$emit('delete',MyItem.id)"
        >delete</MyButtonBlack>
        <MyButtonWhite
            @click="$emit('edit',MyItem)"
        >edit</MyButtonWhite>
      </div>
    </div>
  </div>


</template>
<script>

import MyButtonBlack from "@/components/UI/MyButtonBlack";
import MyButtonWhite from "@/components/UI/MyButtonWhite";
export default {
  name: "listItem",
  components: {
    MyButtonBlack:MyButtonBlack,
    MyButtonWhite:MyButtonWhite
  },

  props:{
    MyItem:{
      type:Object,
      required: true
    }
  },
}

</script>

<style scoped>
  .list-item{
    position: relative;
    z-index: 1;
    display: inline-block;
    font-family: 'Gothic A1', sans-serif;
    width: 250px;
    height: 250px;
    border-radius: 16px;
    box-shadow: 3px 3px 6px rgba(200, 200, 200, 0.8), -3px 3px 6px rgba(200, 200, 200, 0.8) ;
    padding: 5%;
    box-sizing: border-box;
    transition: ease-in-out 0.25s;


  }
  .list-item:hover{
    box-shadow: 3px 3px 10px rgba(150, 150, 150, 0.8), -3px 3px 10px rgba(150, 150, 150, 0.8) ;
    transition: ease-in-out 0.25s;
    transform: translate(0px,-1%)
  }

  .list-item p {
    height: auto;
    word-break: break-all;
  }
  .button-container{
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 0;
    display: flex;
    justify-content: space-between;

  }
  .list-item__wrap{
    justify-self: center;
    align-self: center;
  position: relative;
    height: 100%;

  }



</style>