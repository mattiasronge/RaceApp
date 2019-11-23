<template>
  <div class="races">
          <v-card
    class="mx-auto"
    max-width="700"
  >

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="race in races"
          :key="race._id"
          :cols="race.flex"
        >          
          <v-card>

            <v-img
              :src="race.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px" 
            >
 <v-img src="@/assets/logo.png"></v-img>

     
            </v-img>
       {{ race.name }}
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </div>
  
</template>


<script>
export default {
    name : 'races',

        beforeMount () {
        /* Innan sidan laddas, ska den först hämta datan */
        this.$store.dispatch('getRace');
    },
    computed : {
      races () {
          /* Hämta alla races */
            return this.$store.state.races;
        }
    }
}
</script>
