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
        </div>`
  })
