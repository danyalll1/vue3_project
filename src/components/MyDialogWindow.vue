<template>
  <div class="background" v-if="show === true" @click="$emit('hide')">
    <div @click.stop class="popup-window">
      <div class="TextArea">
        <my-input
            :value="modelValue.name"
            @input="updateInput"
        ></my-input>
                <button
                    class="delete-button"
                    @click="$emit('clearName')"
                >X</button>
        <my-input
            :value="modelValue.body"
            @input="updateInput1"
        ></my-input>
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
  </div>
</template>


<script>

export default {
  name: "MyDialogWindow",
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
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
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
  left: 0;
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
  transition: all 0.25s;
  background-color: gray;

}
.delete-button{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  background-color: black;
  color: white;
  border: solid 2px gray;
  transition: all ease-in-out 0.25s;
}

</style>