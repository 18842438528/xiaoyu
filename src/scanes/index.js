import '../styles/style.scss'
import {HeaderComponent} from '../components/loginHeader/headerComponent'
import {MainComponent } from '../components/loginMain/mainComponent'
export const Index =()=>{
  return(
    <div className="index"> 
      <HeaderComponent/>
      <MainComponent/>
    </div>
  )
}