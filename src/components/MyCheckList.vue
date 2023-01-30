<template>





               <transition-group  tag="div" class="checkList" name="list" v-if="items.length !==0" @before-leave="Scaling" appear>
                 <div class="wrap" v-for="item in items"
                      :key="item">
                     <MyListItem class="item"

                                 :MyItem="item"
                                 @delete="$emit('delete',item.id)"
                                 @edit="$emit('edit',item)"
                                 :style="{ backgroundColor: item.color}"
                     >
                     </MyListItem>
                 </div>
              </transition-group>





  <h2 v-else>
    Empty like your heart
  </h2>

</template>

<script>

import MyListItem from "@/components/MyListItem";
import {gsap} from "gsap";

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
  },
  methods:{
    Scaling(el){
      console.log(el.childNodes);
      gsap.to(el.childNodes,{
        duration: 0.3,
        scale: 0.1,
        opacity: 0,
        display: 0,
      })
    }
  },


}
</script>

<style scoped>
 .checkList{
   position: absolute;
   z-index: 2;
   display: grid;

   grid-template-columns: repeat(3, 350px);
   grid-auto-rows: 350px;
 }

 .wrap{
   position: relative;
    display: inline-block;

   width: 100%;
   height: 100%;
 }

 /*list transitions*/




 .list-enter-from{
   opacity: 0;
   transform: scale(0.6) ;

 }
 .list-enter-to{
   opacity: 1;
   transform: scale(1);
 }


 .list-enter-active{
   transition: all 0.75s;
 }

 .list-leave-from{

 }

 .list-leave-to{

 }





 .list-leave-active {
   position: absolute;
   transition: all 0.7s;

 }

.list-move{
  transition: all 0.7s 0.5s;
}



</style>