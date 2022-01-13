Vue.component('heroe-container', {
  data: () => {
    return {flag_big: false}
  },
  props: {
    datos: Object,
    link: String,
  },
  template: //bloc de codi HTML per un personatge SENSE i AMB descripció oberta
  `<div class="characterContainer" v-if="!flag_big">
    <img :src=link  alt="Image of character" width="1019" height="1100">
    <section >
        <h2>{{ datos.name }}</h2>
        <p>Age: {{ random() }}</p>
        <p>Occupation: {{ datos.role }}</p>
        <button v-on:click="setTrue">+</button>
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
        <button v-on:click="setFalse">-</button>
    </section>
  </div>
  `,
methods: {
  random() {  //generador d'edats pels camps que falten a la API.
    return Math.floor(Math.random() * 99) + 1;
  },
  setTrue(){
    this.flag_big=true;
  },
  setFalse(){
    this.flag_big=false;
  }
}})
