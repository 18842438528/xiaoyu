import '../../styles/style.scss'
import { HeaderComponent } from '../../components/login/loginHeader/headerComponent'
import { MainComponent } from '../../components/login/loginMain/mainComponent'
import { FooterComponent } from '../../components/login/loginFooter/footerComponent'
export const LoginIndex = () => {
  return (
    <div className="index">
      <HeaderComponent />
        <div className='login-index'>
            <MainComponent />
        <FooterComponent />
        </div>
      
     

    </div>
  )
}