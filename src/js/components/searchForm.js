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
      <input type="text" v-model="searchInput">
      <button v-on:click="loadHeroeData">search</button>
    </div>`,
  methods: {

    loadHeroeData() {

          fetch('http://localhost:5500/api/list?search=' + this.searchInput)
          .then(response => response.json())
          .then(datos => {
            
            this.$parent.heroes = datos;
            console.log(this.$parent.heroes );
          })
          .catch(err => {
            console.log('Error: '+ err);
          });
         // console.log('Valor pasado:' + this.$parent.heroes);
          
  }
  }
});
