<template>
  <div class="wrap">

    <form action="post" class="my-form" @submit.prevent>
      <h1>Registration</h1>
      <label for="login" style="color: white">Login</label>
      <my-input type="login" id="login" v-model="newUser.login"></my-input>
      <label for="password" style="color: white">Password</label>
      <my-input type="password" id="password" v-model="newUser.password"></my-input>
      <label for="Re-enter" style="color: white">Re-enter the password</label>
      <my-input type="password" id="Re-enter" v-model="newUser.passwordre"></my-input>
      <label for="e-mail" style="color: white">Email</label>
      <my-input type="e-mail" id="e-mail" v-model="newUser.Email"></my-input>
      <my-button-white
          type="submit"
          @click="postFrom"
      >
        submit
      </my-button-white>
    </form>
  </div>
</template>


<script>
import MyInput from "@/components/UI/MyInput";
import MyButtonWhite from "@/components/UI/MyButtonWhite";
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'



export default {
  components:{
    MyInput,
    MyButtonWhite

  },
  name: "MyForm",

  setup: () => ({ v$: useVuelidate() }),

  data(){
    return{
      newUser:{
        login:'',
        password:'',
        passwordre:'',
        Email:'',
    },

      text:'',
    }
  },
  validations (){
    return{
      login:{required},
      password:{required},
      passwordre:{required},
      Email:{required,email}
    }
  },




  methods:{
    postFrom(){

      this.v$.$validate()
      console.log(this.v$.$error);
      if(!this.v$.$error)
      {
        alert('success')
      }
      console.log(this.v$)
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
  color: rgba(255,255,255,1);
  font-family: 'Gothic A1', sans-serif;
  padding: 16px;
  width: 300px;
  min-height:  600px;
  border-radius: 16px;
  background-color: rgba(221, 24, 70, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-between;


}
</style>