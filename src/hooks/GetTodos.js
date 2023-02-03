import {onBeforeMount, ref} from "vue"


export function getTodos() {
      const checkList = ref([])

      const getItems =function () {if(localStorage.item !== {}){
            checkList.value = JSON.parse(localStorage.item)}}





      onBeforeMount(getItems)
      return{
            checkList,
      }
}







