export default {

  setActiveUser(state, user){
  state.activeUser = user;
},
toggleRejected(state){
  state.rejected = !state.rejected;
},
    /* Har du bokat så lagras det här */
    setBooked(state, eBooked) {
        state.eBooked = eBooked;
    },
    /* Våra loppen som finns på våran DB samlas här */
    setRaces (state, races) {
        state.races = races;
    },

    setRace (state, race) {
        state.race = race;
    }


}
