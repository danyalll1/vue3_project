<template>





               <transition-group  tag="div" class="checkList" name="list" v-if="items.length !==0"
                                  @enter = "Sliding"
                                  @before-enter = "StartPos"
                                  @before-leave="Scaling" appear>
                 <div class="wrap" v-for="(item, idx) in items "
                      :key="item"
                      :data-index='idx'>
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
    },
    listStatus:{
      type: Boolean,
      required: true,
    }
  },
  methods:{
    StartPos(el){
      if (this.listStatus === false){
        let rnd = ()=>{
          if (Math.floor(Math.random()*2) ===  0){
            return `X(${((Math.random() < 0.5) ? '-' : '')}${ Math.floor(Math.random()*(200-100)+100)}px)`;
          }
          else {
            return  `Y(${((Math.random() < 0.5) ? '-' : '')}${ Math.floor(Math.random()*(200-100)+100)}px)`;
          }
        }
        el.style.opacity = 0;
        el.style.transform = `translate${rnd()}`
      }
      else{
        el.style.opacity = 0
        el.style.transform = "Scale(0.3)"
      }

    } ,


    Sliding(el,done){
      if (this.listStatus === false){
        gsap.to(el,{
          opacity: 1,
          y:0,
          x:0,
          duration: 0.8,
          onComplete: done,
          delay: el.dataset.index * 0.2
        })
        this.$emit('status')
      }
      else{
        gsap.to(el, {
          x:0,
          y:0
        })
        gsap.to(el,{
          opacity: 1,
          scale: 1,
          duration: 0.7,
        })
      }
    },


    Scaling(el){
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

   grid-template-columns: repeat(3, 300px);
   grid-auto-rows: 300px;
 }

 .wrap{
   padding: 25px;
   margin: 0;
   position: relative;
   display: inline-block;
   width: 100%;
   height: 100%;
 }



 /*list transitions*/










 .list-leave-active {

   position: absolute;
   transition: ease-in-out all 0.7s;

 }

.list-move{
  transition: all  0.7s 0.5s;
}



</style>