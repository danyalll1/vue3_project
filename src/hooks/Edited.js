import { ref} from "vue"


export function Edited() {

      const EditPopUpVisible = ref(false)
      const  EditedItem = ref({})
      const  EditedItemStatus = ref(true)
      const  ListMount = ref(false)


      return{
            EditPopUpVisible,
            EditedItem,
            EditedItemStatus,
            ListMount
      }








}