
import {createRouter} from  "vue-router"
import {createWebHistory} from "vue-router";
import MyTiles from "@/components/pages/Tiles";
import myList from "@/components/pages/MyList";

const routes = [
      {
      path:'/',
      component: MyTiles
      },
      {
      path:'/List',
      component: myList
      },



]


const router = createRouter({
      routes,
      history: createWebHistory()
})


export default router