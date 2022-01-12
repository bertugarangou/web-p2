/*const { response } = require("express");*/
Vue.component("search-form", {

  data: () => {
    return {
      searchInput: "",
      heroes: []
    };
  },
  template: `
    <div>
      <input class="searchContainer" type="text" v-model="searchInput" placeholder="Search here">
      <button v-on:click="loadHeroeData">Search</button>
    </div>`,  //botó de cerca
  methods: {

    loadHeroeData() {

          fetch('http://localhost:5500/api/list?search=' + this.searchInput)
          .then(response => response.json())
          .then(datos => {
            
            //passar dades al pare
            this.$parent.heroes = datos;
            
            //tancar descripcions
            for (var i = 0; i< this.$parent.heroes.length; i++) {
              this.$parent.heroes[i].flag_big = false;
            }
            
            console.log(this.$parent.heroes );
          })
          .catch(err => {
            //console.log('Error: '+ err);
            //no fer res extra en cas d'error
          });
          
  }
  }
});
