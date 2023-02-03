import {ref , computed} from "vue"





export default  function getSortedAndSearchToDos (SortedList) {
      const searchQuery = ref('')
      const sortedAndSearchedList = computed(() => {
            return SortedList.value.filter(item => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
      })
      return{
            searchQuery, sortedAndSearchedList
      }

}