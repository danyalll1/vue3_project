<template>
  <div class="checkList" v-if="items.length > 0">
    <MyListItem class="item"
                v-for="item in items"
                :key="item.id"
                :MyItem="item"
                @delete="$emit('delete',item)"
                @edit="$emit('edit',item)"
    >
    </MyListItem>
  </div>
  <h2 v-else>
    Empty like your heart
  </h2>
</template>

<script>

import MyListItem from "@/components/MyListItem";

export default {
  name: "MyCheckList",
  components: {
    MyListItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
 .checkList{
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   width: 80%;
   height: 70%;
 }
</style>