import { PasswordComponent } from "../../components/forgotPassword/passwordMain/passwordComponent"
import '../../styles/style.scss'
import { HeaderComponent } from '../../components/login/loginHeader/headerComponent'
import { FooterTextComponent } from "../../components/forgotPassword/passwordFooter/footerTextComponent"
export const PasswordIndex =()=>{
    return(
        <div>
<HeaderComponent/>
<div className='login-index'>
   <PasswordComponent/> 
<FooterTextComponent/>
</div>

        </div>
    )
}