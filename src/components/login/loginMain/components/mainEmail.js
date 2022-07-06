import { MainInput } from "./mainIput"
import { Link } from 'react-router-dom'
export const MainEmail = () => {
  return (
    <div className="login-header-email">
      <div style={{ height: "55px" }}>
        <MainInput hint='Email' placeholder='Enter Your Email' />
      </div>
      <div>
        <Link to='/passwordindex'>
          <p className="login-header-forgot">Forgot password?</p>
        </Link>
        <MainInput hint='Password' placeholder='Enter Your Password' />
      </div>
    </div>
  )
}