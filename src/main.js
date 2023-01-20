import { createApp } from 'vue'
import App from './App.vue'
import MyButtonBlack from "@/components/UI/MyButtonBlack";
import myButtonWhite from "@/components/UI/MyButtonWhite";
import MyInput from "@/components/UI/MyInput";
const app = createApp(App)
app.mount('#app')

app.component('MyButtonBlack', MyButtonBlack)
app.component('MyButtonWhite',myButtonWhite)
app.component('MyInput',MyInput)