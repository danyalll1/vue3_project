import {onBeforeMount, ref} from "vue"


export function getTodos() {
      const checkList = ref([])
      if (!localStorage.item){
            localStorage.setItem('item','[]')
      }
      const getItems =function () {if(localStorage.item !== {}){
            checkList.value = JSON.parse(localStorage.item)}}





      onBeforeMount(getItems)
      return{
            checkList,
      }
}







