import { createApp } from 'vue'
import App from './App.vue'
import MyButtonBlack from "@/components/UI/MyButtonBlack";
import myButtonWhite from "@/components/UI/MyButtonWhite";
import MyInput from "@/components/UI/MyInput";
import router from "@/components/router/router";


const app = createApp(App)

app.component('MyButtonBlack', MyButtonBlack)
app.component('MyButtonWhite',myButtonWhite)
app.component('MyInput',MyInput)


app.use(router)
app.mount('#app')

