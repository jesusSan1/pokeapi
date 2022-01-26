const app = Vue.createApp({
    data() {
        return {
            pokemon: '',
            imagen: '',
            nombrePokemon: '',
            cantidadSalud: '',
            ataque: '',
            defensa: ''
        }
    },
    methods: {
        buscarPokemon() {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}/`).then(response => {
                //Limpiar el input
                this.pokemon = this.pokemon.value = ''

                //Obtener el nombre y la imagen
                this.imagen = response.data.sprites.other.home.front_default //Obtener la imagen
                this.nombrePokemon = response.data.name //obtener el nombre

                //Obtener las estadisticas
                this.cantidadSalud = response.data.stats[0].base_stat //La salud
                this.ataque = response.data.stats[1].base_stat // El ataque
                this.defensa = response.data.stats[2].base_stat //La defensa
            }).catch(function (error) {
                //En caso de fallar, se dispara la alerta
                swal.fire('¡Ha ocurrido un error!', '¡Por favor ingresa un numero o el nombre del pokemon!', 'error');
            })
        }
    }
})
app.mount("#app")