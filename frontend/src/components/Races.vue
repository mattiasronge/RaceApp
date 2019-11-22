<template>
  <div class="hello">

        <ul>
            <li v-for="race in races" :key="race._id" :race="race" @click="$router.push(`/races/${race._id}`)">
            {{race.name}} <em>info</em></li>
        </ul>
  </div>
</template>

<script>
export default {
    name : 'races',
        beforeMount () {
        /* Innan sidan laddas, ska den först hämta våra stugor */
        this.$store.dispatch('getRace');
    },
    computed : {
      races () {
          /* Hämta alla stugor */
            return this.$store.state.races;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
