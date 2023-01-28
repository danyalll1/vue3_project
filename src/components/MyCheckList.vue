<template>





               <transition-group  tag="div" class="checkList" name="list" v-if="items.length > 0" >
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
   display: flex;
   align-items: center;
   width: 100%;
   height: 100%;
 }

 /*list transitions*/

.list-leave-from{
  transform: scale(1);
  opacity: 1;
}
.list-leave-to{
  transform: scale(0.4);
  transition: transform ease 0.8s;
  opacity: 0;

}

.list-leave-active{
  position: absolute;
  transition: all ease 0.4s;

}

.list-move{
  transition: transform ease 0.8s;
}



@keyframes leaving {

  0%{opacity: 1;
  transform: scale(1);

  }
  25%{opacity: 0.75;
    transform: scale(0.8);

  }
  50%{opacity: 0.50;
    transform: scale(0.4);

  }
  75%{opacity: 0.35;
    transform: scale(0.2);

  }
  100%{opacity: 0.25;
    position: absolute;
    transform: scale(0);
    }
}






</style>