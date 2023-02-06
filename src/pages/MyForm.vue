<template>
  <div class="wrap">

    <form action="post" class="my-form" @submit.prevent>
      <h1>Form</h1>
      <label for="login"></label>
      <input type="text" id="login" v-model="newUser.login">
      <label for="password"></label>
      <input type="text" id="password" v-model="newUser.password">
      <input type="text" id="e-mail" v-model="newUser.Email">
      <button type="submit" @click="postFrom">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data(){
    return{
    newUser:{
      login:'',
      password:'',
      Email:'',
    },

      text:'',
    }
  },
  methods:{
    postFrom(){
      JSON.stringify(this.newUser)
      console.log( JSON.stringify(this.newUser))
      this.newUser.login = ''
      this.newUser.password = ''
      this.newUser.Email = ''
    }
  }
}
</script>

<style scoped>
.wrap{

  margin-top: 70px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

}

.my-form{
  display: flex;
  flex-direction: column;
  justify-content: space-between;


}
</style>