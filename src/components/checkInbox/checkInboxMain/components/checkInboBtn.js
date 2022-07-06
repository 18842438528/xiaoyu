import { MainBtn } from "../../../login/loginMain/components/mainBtn"
import { Link } from "react-router-dom"
export const CheckInboxBtn=()=>{
  return(
    <div className="password-main-btn">
      <Link to='/'>
      <MainBtn name='Return to Login'/>
      </Link>
     
    </div>
  )
}