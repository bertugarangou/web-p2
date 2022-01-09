import {}  from "../components/heroecontainer.js"
import {} from "../components/searchForm.js";

var app = new Vue({
    el: '#appOverWatch',
    data: () => {
      return {
        heroes: "",
        searchInput: ""
      };
    }
  })

