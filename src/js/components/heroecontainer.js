Vue.component('heroe-container', {
    props: {
        data: Object
      },
    template: 
        `<div class="characterContainer">
            <img src={{ data.portrait }} alt="Image of character" width="1019" height="1100">
            <section>
                <h2>{{ data.name }}</h2>
                
                <p>Occupation: {{ data.role }}</p>
                <button>+</button>
            </section>
        </div>`,
    methods: {
        loadHeroeData() {
            fetch('https://localhost:5500/api/list' + this.data.key)
                .then(response => response.json())
                .then(data => this.$parent.heroesdata = data.abilities[0].ability.name);
        }
      }
  })
