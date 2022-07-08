import { MainBtn } from "../../../login/loginMain/components/mainBtn"
import { Link } from "react-router-dom"
export const CreateBtn = ({onClick}) => {
  return (
    <div className="password-main-btn">
      <Link to='/'>
        <MainBtn name='Register'  onClick={onClick}/>
      </Link>
    </div>
  )
}