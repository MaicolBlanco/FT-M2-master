// console.log('probando')
var elementoHTML =  <div>
                        <h2> Martin </h2>
                        <h2> Esteban </h2>
                    </div>

const datos = [
                {
                    id: 1,
                    nombreP: 'Martin',
                    apellidoP: 'Blanco',
                    nombreT: 'Tren 1',
                    largoT: 10
                },
                {
                    id: 2,
                    nombreP: 'Esteban',
                    apellidoP: 'Blanco',
                    nombreT: 'Tren 1',
                    largoT: 5
                },
                {
                    id: 3,
                    nombreP: 'Maicol',
                    apellidoP: 'Blanco',
                    nombreT: 'Tren 2',
                    largoT: 20
                },
                {
                    id: 4,
                    nombreP: 'Vivian',
                    apellidoP: 'Guevare',
                    nombreT: 'Tren 2',
                    largoT: 25
                },
                ]

class Persona extends React.Component{
    render(){
        let nombre = this.props.nombre
        const elementoNombre = <h2 >Nombre: { nombre } </h2>
        return(
            <div>
                {elementoNombre}
                <h2>
                    Apellido: { this.props.apellido }
                </h2>
                <hr />
            </div>
        )
    }
}

function Tren(props){
    const elementoNombreTren = <h3>
        Nombre del tren: { props.nombre}
    </h3>
    return(
        <>
        {elementoNombreTren}
        <h3>
            Largo del tren: { props.largo } metros
        </h3>
        </>
    )
}

function Contenedor(){
    return(
        <>
            <h1>PARADA DE TREN</h1>
            {
                datos.map((elemento, index) =>{
                    return(
                        <div key={elemento.id}>
                            <Tren
                                nombre= {elemento.nombreT}
                                largo = {elemento.largoT}
                            />
                            <Persona
                                nombre= {elemento.nombreP}
                                apellido= {elemento.apellidoP}
                            />
                        </div>
                    )
                })
             }
        </>
    )
}

ReactDOM.render(<Contenedor/>, document.getElementById('tag'))