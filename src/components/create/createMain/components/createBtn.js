import { MainBtn } from "../../../login/loginMain/components/mainBtn"
import { Link } from "react-router-dom"
export const CreateBtn=()=>{
  return(
    <div className="password-main-btn">
      <Link to='/'>
      <MainBtn name='Register'/>
      </Link>
     
    </div>
  )
}