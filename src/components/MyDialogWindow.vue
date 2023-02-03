<template>
  <div class="background" v-if="show === true" @mousedown="$emit('hide')">

    <transition name="dive">
    <div @click.stop @mousedown.stop v-if="show === true" class="popup-window">
      <div class="input-wrap">
      <my-input
          :value="modelValue.name"
          @input="updateInput"
      ></my-input>
      <MyButtonWhite
          v-if="status === true "
          @click="$emit('submit')"
          class="edit-button">
        create
      </MyButtonWhite>
      <MyButtonWhite
          v-else
          @click="$emit('submit')"
          class="edit-button">
        edit
      </MyButtonWhite>
      </div>
      <div class="TextArea">
        <MyTextarea
            :value="modelValue.body"
            @input="updateInput1"
        ></MyTextarea>
        <button
            @click="$emit('clearBody')"
            class="delete-button"
        >X</button>
      </div>

    </div>
    </transition>
  </div>

</template>


<script>

import MyTextarea from "@/components/UI/MyTextArea";
export default {
  name: "MyDialogWindow",
  components: {MyTextarea},
  props: {
    status: Boolean,
    show: Boolean,
    modelValue:{
      type : Object
    }
  },
  methods: {
    updateInput(event) {
      let name = event.target.value
      this.$emit('name', name)
    },
    updateInput1(event) {
      let body = event.target.value
      this.$emit('body', body)
    },
  }
}


</script>

<style scoped>
.background {
  top: 0;
  z-index: 20000;
  position: fixed;
  background-color: rgba(0 ,0 ,0,0.2);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.popup-window {
  position: relative;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  font-family: 'Gothic A1', sans-serif;
  width: 400px;
  height: 400px;
  border-radius: 16px;
  box-shadow: 3px 3px 6px rgba(200, 200, 200, 0.8), -3px 3px 6px rgba(200, 200, 200, 0.8) ;
  padding: 10px;
  box-sizing: border-box;
  transition: ease-in-out 0.25s;
  background-color:  rgb(213, 128, 255);

}

.TextArea {
  position: relative;
  width: 100%;
  height: 100%;
}



.edit-button:hover{
  transition: all 0.4s;
  background-color: lightcyan;


}
.delete-button{
  top:5px;
  right: 5px;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  background-color: black;
  color: white;
  border: solid 2px gray;
  transition: all ease-in-out 0.25s;
}

.input-wrap{
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dive-enter-from{
  transform: translateY(-200px);
}
.dive-enter-to {
  transform: translateY(0px);
}
.dive-enter-active {
  transition: all ease-in-out .75s;
}
.dive-leave-from{

}
.dive-leave-to {

}
.dive-leave-active {
  transition: ease-in-out .75s;
}




</style>