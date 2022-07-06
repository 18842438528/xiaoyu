import { MainBtn } from "../../../login/loginMain/components/mainBtn"
import { Link } from "react-router-dom"
export const PasswordBtn = () => {
  return (
    <div className="password-main-btn">
      <Link to='/checkinboxindex'>
        <MainBtn name='Reset My Password' />
      </Link>
    </div>
  )
}