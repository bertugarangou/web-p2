Vue.component('heroe-container', {
  methods: {
    random() {  //generador d'edats pels camps que falten a la API.
      return Math.floor(Math.random() * 99) + 1;
    }
  },
  props: {
      datos: Object,
      link: String,
      flag_big: Boolean
  },
  template: //bloc de codi HTML per un personatge SENSE i AMB descripció oberta
  `<div class="characterContainer" v-if="!flag_big">
    <img :src=link  alt="Image of character" width="1019" height="1100">
    <section >
        <h2>{{ datos.name }}</h2>
        <p>Age: {{ random() }}</p>
        <p>Occupation: {{ datos.role }}</p>
        <button v-on:click="flag_big=true ">+</button>
    </section>
  </div>
  
  <div class="characterContainer2" v-else>
    <img :src=link  alt="Image of character2" width="1019" height="1100">
    <section>
        <h2>{{ datos.name }}</h2>
        <p>Age: {{ random() }}</p>
        <p>Occupation: {{ datos.role }}</p>
        <p>Base of operations: {{  }}</p>
        <p>Affiliation: {{  }}</p>
        <p>Lore</p>
        <p>{{ datos.message }}</p>
        <button v-on:click="flag_big=false">-</button>
    </section>
  </div>
  `
})
