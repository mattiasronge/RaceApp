import axios from "axios";

export default {

    /* Hämta loppen ifrån Databasen */
    async getRace (ctx) {
        let races = await axios.get('http://localhost:3000/races');
        ctx.commit('setRaces', races.data);
    }


}
