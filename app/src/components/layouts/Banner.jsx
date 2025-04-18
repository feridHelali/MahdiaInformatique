import './Banner.css'
import computer from '../../assets/computer.png'

function Banner() {
    return (
        <div className="banner">
          <div className='title'>Mahdia Informatique</div>
          <img src={computer} alt="computer" />
        </div>
    )
}

export default Banner