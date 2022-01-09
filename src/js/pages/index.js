import {}  from "../components/heroecontainer.js"
import {} from "../components/searchForm.js";

var app = new Vue({
    el: '#appOverWatch',
    data: () => {
      return {
        heroes: "",
        searchInput: ""
      };
    },
    methods: {
  
      loadHeroeData: function () {
  
            fetch('http://localhost:5500/api/list?search=' + this.searchInput)
            .then(response => response.json())
            .then(datos => {
              
              this.heroes = datos;
              
              for (var i = 0; i< this.heroes.length; i++) {
                this.heroes[i].flag_big = false;
              }
              
              console.log(this.heroes );
            })
            .catch(err => {
              console.log('Error: '+ err);
            });
           // console.log('Valor pasado:' + this.$parent.heroes);
            
      },
      greet: function (event) {
        // `this` inside methods point to the Vue instance
        alert('Hello ' + this.heroes.length + '!')
      }
    }
  })

