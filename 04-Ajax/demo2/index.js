// console.log(`Hola 
// Primera Prueba`)

let boton = document.querySelector('.boton1')

boton.addEventListener('click', () =>{
    // console.log(`Hey, aquí conectado bien`)

    /* Realizamos el request por medio de JQUERY */

    // $.get(`https://pokeapi.co/api/v2/pokemon/pikachu`, (data) => {
    //     console.log(data)
    //     /* Si queremos acceder alguna ruta en especifico */
    //     // let stat = data.stats[4].stat.name
    //     // console.log(stat)
    //     // let nombre = data.name
    //     // console.log(nombre)
    //     // let datos = []
    //     // datos.push(data.name, data.id, data.height)
    //     // console.log(datos)
    // })
    let input = document.querySelector('.nombrePokemon')
    // console.log(input.value)
    /* Nombres de pokemones : pikachu, bulbasaur, ivysaur */
    /* REALIZAMOS el request por medio de AJAX */
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${input.value}`,
        // type: 'get' ó 'put' ó 'delete' ó 'post'
        type: 'get',
        success: (data) => {
            let datos = []
            datos.push(data.name, data.id, data.height)
            // console.log(datos)
            let contenedor = document.querySelector('.contenedor')
            
            let nombre = document.createElement('h2')
            nombre.innerText = data.name
            contenedor.appendChild(nombre)

            let id = document.createElement('h3')
            id.innerText = data.id
            contenedor.appendChild(id)

            let height = document.createElement('h4')
            height.innerText = data.height
            contenedor.appendChild(height)
        }
    })
})