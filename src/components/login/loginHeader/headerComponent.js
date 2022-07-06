import '../../../styles/style.scss'
import { Menu } from './components/menu'
import { Search } from './components/search'
import { Cart } from './components/cart'
export const HeaderComponent=()=>{
  return(
    <div className="login-header-gross"> 
      <Menu/>
      <Search/>
      <Cart/>
    </div>
  )
}