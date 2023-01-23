<template>
  <div class="list-item">
    <div>
      <h1>{{MyItem.name}}</h1>
      <p>{{MyItem.body}}</p>
      <MyButtonBlack
          @click="$emit('delete',MyItem)"
      >delete</MyButtonBlack>
      <MyButtonWhite
          @click="$emit('edit',MyItem)"
      >edit</MyButtonWhite>
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
    margin: 2% 2% 0 0;
    width: 300px;
    height: 200px;
    background-color: rgba(250,250,250,0.8);
    border-radius: 16px;
    border: solid 2px black;
    padding: 1%;
    box-sizing: border-box;
    transition: transform ease-in-out 0.2s;
  }

  .list-item p {
    height: 80px;
    word-break: break-all;

  }
</style>