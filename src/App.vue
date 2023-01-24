<template>
  <div class="root">
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

    <div class="header">
      <h1>Notes</h1>
      <MyButtonBlack
          @click="CreateItem"
      >create
      </MyButtonBlack>
    </div>
    <div class="wrap">


      <MyCheckList
          :items="checkList"
          @delete="DeleteItem"
          @edit="EditItem"
      >

      </MyCheckList>
    </div>
  </div>

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
        {}
      ],
      EditPopUpVisible: false,
      EditedItem: {},
      EditedItemStatus: true

    }
  },

  mounted() {
    if(localStorage.item){
      this.checkList = JSON.parse(localStorage.item)
    }
  },

  methods: {
    DeleteItem(item) {
      this.checkList = this.checkList.filter(i => i.id !== item.id)
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

.root{
  flex-direction: column;
  width: 100%;
  position: absolute;
  justify-content:  center;
  display: flex;
}

.header{
  margin-top: 2%;
  margin-bottom: 2%;
  font-family: 'Gothic A1', sans-serif;;
  font-weight: 400;
  font-size: 26px;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.wrap{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

}


</style>
