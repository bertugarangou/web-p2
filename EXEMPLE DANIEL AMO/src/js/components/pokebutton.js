Vue.component('poke-button', {
    props: {
        data: Object
      },
    template: '<button v-on:click="loadPokeData">{{ data.name }}</button>',
    methods: {
        loadPokeData() {
            fetch('https://pokeapi.co/api/v2/pokemon/' + this.data.id)
                .then(response => response.json())
                .then(data => this.$root.pokedata = data.abilities[0].ability.name);
        }
      }
  })