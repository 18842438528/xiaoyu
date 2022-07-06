import CartImg from '../../../../assets/cartImg.png'
import { NewPerformance } from './performance'
export const Cart = () => {
  return (
    <div className="login-header-cart">
      <div className='home-header-cart-img'>
        <img src={CartImg} alt='' />
        <NewPerformance/>
      </div>
     
    </div>
  )
}