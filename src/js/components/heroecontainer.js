Vue.component('heroe-container', {
    props: {
        datos: Object,
        link: String
      },
    template: 
    `<div class="characterContainer" >
    <img :src=link  alt="Image of character" width="1019" height="1100">
        <section>
            <h2>{{ datos.name }}</h2>
            <p>Occupation: {{ datos.role }}</p>
            <button>+</button>
        </section>
    </div>`
  })
