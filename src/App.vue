<template>

  <my-dialog-window
      v-model:show="EditPopUpVisible"
      v-model:status="EditedItemStatus"
      @hide="HidePopup"
      @name="SetName"
      @body="SetBody"
      v-model:modelValue="EditedItem"
      @submit="SubmitEditing"
  ></my-dialog-window>


  <MyButtonBlack
      @click="CreateItem"

  >create
  </MyButtonBlack>
  <MyCheckList
      :items="checkList"
      @delete="DeleteItem"
      @edit="EditItem"
  >

  </MyCheckList>
</template>

<script>


import MyButtonBlack from "@/components/UI/MyButtonBlack";

import MyCheckList from "@/components/MyCheckList";
import MyDialogWindow from "@/components/MyDialogWindow";

export default {
  name: 'App',
  components: {
    MyDialogWindow,
    MyCheckList,
    MyButtonBlack
  },


  data() {
    return {
      checkList: [

      ],
      EditPopUpVisible: false,
      EditedItem: {},
      EditedItemStatus: true
    }
  },

  methods: {
    DeleteItem(item) {
      this.checkList = this.checkList.filter(i => i.id !== item.id)
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



    SubmitEditing() {
      let index = this.checkList.findIndex(e => e.id === this.EditedItem.id)
      switch (this.EditedItemStatus) {
        case true:
          this.EditPopUpVisible === false ? this.EditedItem = JSON.parse(JSON.stringify({})) : true
          this.EditPopUpVisible === false ? this.EditPopUpVisible = true : true
          if (Object.keys(this.EditedItem).length != 0) {
            this.EditedItem.id = Date.now()
            this.checkList.push(this.EditedItem)
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
</style>
