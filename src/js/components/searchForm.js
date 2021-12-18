Vue.component("search-form", {
  data: () => {
    return {
      searchInput: "",
      heroese: []
    };
  },
  template: `
    <form v-on:submit.prevent="search">
      <input type="text" v-model="searchInput">
      <input type="submit" value="search">
    </form>`,
  methods: {
    search(event) {
      console.log(this.searchInput);
      this.$root.searchInput = this.searchInput;
      fetch('https://localhost:5500/api/list' + this.searchInput)
      .then(response => response.json())
      .then(data => this.heroese = data);
      console.log(this.heroese);
    }
  }
});
