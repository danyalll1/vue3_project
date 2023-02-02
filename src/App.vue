<template>
<my-navigation>
  <router-link to="/List">List</router-link>
  <router-link to="/">Tiles</router-link>
</my-navigation>
  <div class="root">
      <router-view>
      </router-view>
  </div>

</template>






<script>

import MyNavigation from "@/components/UI/MyNavigation";
export default {
  components: {MyNavigation}
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
  height: 100%;
  justify-content:  center;
  display: flex;
}

</style>
