import MotorbikeCardContent from "./MotorbikeCardContent"
import MotorbikeCardCover from "./MotorbikeCardCover"
import './ProductCard.css'

function MotorbikeCard({id,coverUrl,label,description,brand,price}) {
 
  return (
    <div className="motorbikeCard">
      <MotorbikeCardCover coverUrl={coverUrl}/>
      <MotorbikeCardContent
          id={id}
          label={label}
          description={description}
          brand={brand}
          price={price}
          />
     
    </div>
  )
}

export default MotorbikeCard