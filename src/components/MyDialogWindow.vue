<template>
  <div class="background" v-if="show === true" @click="$emit('hide')">

    <transition name="dive">
    <div @click.stop v-if="show === true" class="popup-window">

      <div class="TextArea">
        <my-input
            :value="modelValue.name"
            @input="updateInput"
        ></my-input>
        <MyTextarea
            :value="modelValue.body"
            @input="updateInput1"
        ></MyTextarea>
              <button
                  @click="$emit('clearBody')"
                  class="delete-button"
              >X</button>
      </div>
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
  z-index: 20000;
  position: fixed;
  background-color: rgba(0 ,0 ,0,0.2);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.popup-window {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 600px;
  height: 300px;
  background-color: white;
  border: solid 2px black;
  border-radius: 16px;
}

.TextArea {
position: relative;
  width: 70%;
  height: 100%;
}

.edit-button {

  width: 30%;
  margin-right: 5px;
  height: 95%;
  transition: all 0.25s;
}

.edit-button:hover{
  transition: all 0.4s;
  background-color: lightblue;


}
.delete-button{
  left : 326px;
  top: 72px;
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