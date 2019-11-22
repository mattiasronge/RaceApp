
export default {
    races (state) {
        return state.races;
    },
    race (state) {
        return state.race;
    },
    getRacesByRacesId (state) {
        return (id) => {
            return state.races.filter(
                race => race._id == id
            )[0]
        }
    }
}
