import './ProductCardCover.css'
import getPhotoUrl from '../../utilities/getPhotoUrl'

function ProductCardCover({coverUrl}) {
  return (
    <div className='cardCover'>
        <img style={{width:'350px'}} src={getPhotoUrl(coverUrl)} alt="motorbike" />
    </div>
  )
}

export default ProductCardCover