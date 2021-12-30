Vue.component('heroe-container', {
  methods: {
    random() {
      return Math.floor(Math.random() * 99) + 1;
    }
  },
  props: {
      datos: Object,
      link: String,
      random: Math.floor(Math.random() * 99) + 1
  },
  template: 
  `<div class="characterContainer" >
    <img :src=link  alt="Image of character" width="1019" height="1100">
    <section>
        <h2>{{ datos.name }}</h2>
        <p>Age: {{ random() }}</p>
        <p>Occupation: {{ datos.role }}</p>
        <button>+</button>
    </section>
  </div>`
})

