// console.log(`Aqui probando`)

/* Usando AJAX */
// let boton = document.querySelector('#boton')
// boton.addEventListener('click', () =>{
//     // console.log(`Aqui probando`)
//     $.ajax({
//         url: 'http://localhost:5000/amigos',
//         type: 'get',
//         success: (data) =>{
//             let lista = document.querySelector('#lista') 
//             // console.log(data)  
//             let nombre = data.forEach((amigo, index) => {
//                 lista.append(`<li>${amigo.name}</li>`)
//             });      
//         }
//     })
// })

/* Usando JQUERY se ahorran muchas lienas de código*/
$('#boton').click( () =>{
    /* Para limpiar la lista y cuando se de click no se repita la inf */
    $('#lista').empty()
    $.get(`http://localhost:5000/amigos`, (info) =>{
        // console.log(info)
        for (let i = 0; i < info.length; i++) {
            $('#lista').append(`<li>${info[i].name}</li>`)
        }
        // info.forEach((amigo, index) => {
        //     // console.log(amigo)
        //     $('#lista').append(`<li id=${amigo.id}>${amigo.id} ${amigo.name}</li>`)
        // });
    })
})
$('#search').click( () =>{
    // console.log('Probando')
    const valorInput = $('#input').val() //getElementById('#input').value
    if(!valorInput) return alert('Ingresar un Id')
    $.ajax({
        url: `http://localhost:5000/amigos/${valorInput}`,
        type: 'get',
        // success: ({name, email, id}) =>{
        success: (data) =>{
            // console.log(data)
            // $('#amigo').text(`${name}`)
            $('#amigo').text(`${data.name}`)
            $('#input').val('')
        }
    })
    /* Por medio de Jquery */
    // $.get(`http://localhost:5000/amigos/${valorInput}`, data =>{
    //     $('#amigo').text(`${data.name}`)
        /* getElementById('amigo').innerHTML = data.name  */
    // })
})

$('#delete').click( () =>{
    // console.log('Probando')
    const valorInput = $('#inputDelete').val()
    if(!valorInput) return alert('Ingresar un Id')
    $.ajax({
        url: `http://localhost:5000/amigos/${valorInput}`,
        type: 'delete',
        success: (data) =>{
            // console.log(data)
            $('#inputDelete').val('')
            $('#sucess').text(`tu amigo ${valorInput} borrado con éxito`)
        }
    })
})