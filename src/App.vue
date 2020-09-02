<template>
  <div>
    <Navber/>
    <div class="container">
      <router-view/>
    </div>
  </div>
  
</template>

<script>
import Navber from "./components/Navber";

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

export default {
  name: 'app',
  components: {
    Navber
  }
} 
</script>

<style scoped>
</style>>
