
import './Animal.css'

const Animal = (props)=>{

  const { animal, deleteAnimal } = props

  return(
    <div className="Animal">
      <h3>{animal}</h3>
      <button onClick={()=>deleteAnimal(animal)}>BORRAR</button>
    </div>
  )
}

export default Animal