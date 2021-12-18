Vue.component("search-form", {
    data: () => {
      return {
        searchInput: ""
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
      }
    }
  });