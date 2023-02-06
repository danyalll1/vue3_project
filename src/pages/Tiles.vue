<template>
    <transition name="window">
      <my-dialog-window
          v-model:show="EditPopUpVisible"
          v-model:status="EditedItemStatus"
          @hide="HidePopup"
          @name="SetName"
          @body="SetBody"
          v-model:modelValue="EditedItem"
          @submit="SubmitEditing"
          @clearName="ClearName"
          @clearBody="ClearBody"
      ></my-dialog-window>
    </transition>

    <div class="header">
      <h1>Notes</h1>
      <div class="button-container">
        <my-input
            v-model="searchQuery"
        >
        </my-input>
        <MyButtonBlack
            style="margin-left: 10px"
            @click="CreateItem"
        >create
        </MyButtonBlack>
        <MySelect
            v-model="selectedSort"
            :options="sortOptions"
        >
        </MySelect>
      </div>

    </div>
    <div class="wrap">
      <MyCheckList
          v-model:listStatus = "ListMount"
          :items="sortedAndSearchedList"
          @delete="DeleteItem"
          @edit="EditItem"
          @status = "AfterMount"
      >
      </MyCheckList>
    </div>
</template>

<script>


import MyButtonBlack from "@/components/UI/MyButtonBlack";
import MyCheckList from "@/components/MyCheckList";
import MyDialogWindow from "@/components/MyDialogWindow";
import MySelect from "@/components/UI/MySelect";
import {getTodos} from "@/hooks/GetTodos";
import getSortedToDos from "@/hooks/GetSortedToDos";
import getSortedAndSearchToDos from "@/hooks/GetSortedAndSearchToDos";
import {Edited} from "@/hooks/Edited";

export default {

  name: 'MyTiles',
  components: {
    MySelect,
    MyDialogWindow,
    MyCheckList,
    MyButtonBlack
  },


  data() {
    return {
      sortOptions: [
        {value: 'name', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
        {value: 'id', name: 'По id'},

      ]
    }

  },
  setup() {
    const {checkList} = getTodos()
    const {selectedSort, sortTodos} = getSortedToDos(checkList)
    const {searchQuery, sortedAndSearchedList} = getSortedAndSearchToDos(sortTodos)
    const {EditedItemStatus, EditedItem ,EditPopUpVisible, ListMount} =Edited()

    return {
      checkList,
      selectedSort,
      sortTodos,
      searchQuery,
      sortedAndSearchedList,
      EditedItemStatus,
      EditedItem ,
      EditPopUpVisible,
      ListMount

    }
  },






  methods: {
    DeleteItem(item) {
      this.checkList.splice(this.checkList.findIndex(el => el.id ===item),1)
      this.SetLocalStorage()
    }
    ,

    EditItem(item) {
      this.EditPopUpVisible = true
      this.EditedItemStatus = false
      this.EditedItem = JSON.parse(JSON.stringify(item)) //скопирует item и положит его в editeditem
    }
    ,

    HidePopup() {
      this.EditPopUpVisible = false
    }
    ,
    SetBody(e) {
      this.EditedItem.body = e
    }
    ,
    SetName(e) {
      this.EditedItem.name = e
    }
    ,
    CreateItem(){
      this.EditedItemStatus = true
      this.SubmitEditing()
    },
    ClearName(){
      this.EditedItem.name = ''
    },
    ClearBody(){
      this.EditedItem.body = ''
    },
    SetLocalStorage(){
      localStorage.setItem('item',JSON.stringify(this.checkList))
    },
    GetColor(){
      let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
      return color;
    },
    AfterMount(){
      this.ListMount = true
    },
    SubmitEditing() {
      let index = this.checkList.findIndex(e => e.id === this.EditedItem.id)
      switch (this.EditedItemStatus) {
        case true:
          this.EditPopUpVisible === false ? this.EditedItem = JSON.parse(JSON.stringify({})) : true
          this.EditPopUpVisible === false ? this.EditPopUpVisible = true : true
          if (Object.keys(this.EditedItem).length > 0) {
            this.EditedItem.color = this.GetColor()
            this.EditedItem.id = Date.now()
            this.checkList.push(this.EditedItem)
            this.SetLocalStorage()
            this.HidePopup()
          }
          else{
            console.log('error')
          }

          break;
        case false:
          this.HidePopup()
          this.checkList[index].name = this.EditedItem.name
          this.checkList[index].body = this.EditedItem.body
          this.SetLocalStorage()
          break;
      }

    }
  }
}
</script>



<style>
* {
  padding: 0;
  margin: 0;
}


.header{
  top:0;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1000;
  position: fixed;
  font-family: 'Gothic A1', sans-serif;;
  font-weight: 400;
  font-size: 26px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}



.wrap{
  margin-top: 70px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

}

.button-container{

  display: flex;
  justify-content:flex-start;
  align-items: center;
}

.window-enter-from{
  opacity: 0;
}
.window-enter-to {
  opacity: 1;
}
.window-enter-active {
  transition: all ease-in-out .75s;
}
.window-leave-from{
  opacity: 1;
}
.window-leave-to {
  opacity: 0;
}
.window-leave-active {

  transform: translateY(-200px);
  transition: ease-in-out .75s;
}

</style>
