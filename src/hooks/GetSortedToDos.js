import {ref , computed} from "vue"





export default  function getSortedToDos (List) {
      const selectedSort = ref('name')
      const sortTodos = computed(() => {
            console.log(List)
                  if (selectedSort.value === 'id'){
                        return [...List.value].sort((item1,item2)=>  /// Получение нового массива по исходному, его сортировка
                            item1[selectedSort.value] - (item2[selectedSort.value]))  //Затем биндим это компьютед свойство в :items MyCheckList
                  }
                  else {
                        return [...List.value].sort((item1,item2)=>
                            item1[selectedSort.value].localeCompare(item2[selectedSort.value]))
                  }
      })
      return{
            selectedSort, sortTodos
      }

}