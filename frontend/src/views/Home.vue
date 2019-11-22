<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Races msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Races from '@/components/Races.vue'

export default {
  name: 'home',
  components: {
    Races
  }
}
</script>
