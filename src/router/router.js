
import {createRouter} from  "vue-router"
import {createWebHistory} from "vue-router";
import MyTiles from "@/pages/Tiles";
import myList from "@/pages/MyList";
import MyForm from "@/pages/MyForm";

const routes = [
      {
            path:'/',
            component: MyTiles
      },
      {
            path:'/List',
            component: myList
      },
      {
            path:'/Form',
            component: MyForm
      }




]


const router = createRouter({
      routes,
      history: createWebHistory()
})


export default router