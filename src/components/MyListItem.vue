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

</style>