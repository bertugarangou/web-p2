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
        loadData(key) {
          console.log(key)
            fetch('https://localhost:5500/api/list' + key)
                .then(response => response.json())
                .then(data => this.$parent.heroes = data);
        }
      }
  })


