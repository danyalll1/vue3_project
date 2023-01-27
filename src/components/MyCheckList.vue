<template>





               <transition-group  tag="div" class="checkList" name="list" v-if="items.length > 0">
                   <MyListItem class="item"
                               v-for="item in items"
                               :key="item"
                               :MyItem="item"
                               @delete="$emit('delete',item.id)"
                               @edit="$emit('edit',item)"
                               :style="{ backgroundColor: item.color}"
                   >
                   </MyListItem>
              </transition-group>






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
   position: static;
   z-index: 1;
   display: grid;
   grid-template-columns: repeat(3, 350px);
   grid-auto-rows: 350px;
 }


 /*list transitions*/



 .list-enter-active {
   display: block;
   animation: bounce-in .6s;
 }
 .list-leave-active {

   animation: bounce-in .6s reverse;
 }
 @keyframes bounce-in {
   0% {
     transform: scale(0.4);
   }
   50% {
     transform: scale(1.2);
   }
   100% {
     transform: scale(1);
   }
 }
    .list-leave-to{
   position: absolute;

   }
   .list-move{
     transition: translate ease 0.7s;
   }




 /*.list-enter-from{*/
 /*  opacity: 0;*/
 /*  transform: scale(0.6) ;*/

 /*}*/
 /*.list-enter-to, .list-leave-from{*/
 /*  opacity: 1;*/
 /*  transform: scale(1);*/
 /*}*/
 /*.list-enter-active{*/
 /*  transition: all ease 0.5s;*/
 /*}*/
 /*.list-leave-to{*/
 /*  position: absolute;*/
 /*  opacity: 0;*/
 /*  transform: scale(0.4);*/
 /* }*/
 /*.list-leave-active{*/
 /*  opacity: 0;*/

 /*  transition: all ease 0.6s;*/
 /*}*/
 /*.list-move{*/

 /*  transition: all ease 1s;*/
 /* }*/




</style>