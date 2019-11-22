export default {

  setActiveUser(state, user){
  state.activeUser = user;
},
toggleRejected(state){
  state.rejected = !state.rejected;
},
    /* Har du bokat en stuga så lagras den här */
    setBooked(state, eBooked) {
        state.eBooked = eBooked;
    },
    /* Våra stugor som finns på våran DB samlas här */
    setRaces (state, races) {
        state.races = races;
    },
    /* När vi tillverkar en ny stuga så sparas det även här */
    setRace (state, race) {
        state.race = race;
    }


}
