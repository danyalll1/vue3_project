<template>





               <transition-group  tag="div" class="checkList" name="list" v-if="items.length > 0" mode="out-in" @after-leave="relist">
                 <div class="wrap" v-for="item in items"
                      :key="item">
                     <MyListItem class="item"
                                  v-if="item.name !== 0"
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


    relist(el){
      console.log(el)

      }


  }
}
</script>

<style scoped>
 .checkList{
   position: absolute;
   z-index: 1;
   display: grid;

   grid-template-columns: repeat(3, 350px);
   grid-auto-rows: 350px;
 }

 .wrap{
   position: relative;
   display: inline-block;
   align-items: center;
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
   transform: scale(1);
   opacity: 1;


 }
 .list-leave-to{
   opacity: 0;
   transform: scale(0.6) ;
 }

 .list-leave-active {
   transition: transfrom 0.7s;
   position: absolute;
 }

.list-move{
  transition: all 0.7s;
}



</style>