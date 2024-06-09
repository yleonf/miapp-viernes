import pokemon from './assets/pokemon.jpg'

function Inicio(){
  return(
    <>
    <h1>Hello Mi app</h1>
    <h1>Mi primera app con React</h1>
    <img className='imagen' src={pokemon}/>
    </>
  )
}

export default Inicio;