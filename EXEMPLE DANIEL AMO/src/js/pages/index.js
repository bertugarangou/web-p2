import {} from "../components/pokebutton.js"
import {} from "../components/pokedata.js"
import {} from "../components/searchform.js"


var app = new Vue({
    el: '#appPokemons',
    data: () => {
        return {
            pokemons: [
                {
                    "id": 1,
                    "name": "bulbasaur"
                },
                {
                    "id": 20,
                    "name": "raticate"
                }
            ],
            pokedata: "",
            searchInput: ""
        }
    }
})