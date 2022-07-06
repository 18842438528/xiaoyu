import { PasswordHeader } from "./component/passwordHeader"
import { PasswordMain } from './component/passwordMain'
import { PasswordEmail } from "./component/passwordEmail"
import { PasswordBtn } from "./component/passwordBtn"
export const PasswordComponent=()=>{
    return(
        <div className="login-main">
        <div className='password-main-box'>
           <PasswordHeader/>
           <PasswordMain/>
           <PasswordEmail/>
           <PasswordBtn/>
        </div>
    </div>
    )
}