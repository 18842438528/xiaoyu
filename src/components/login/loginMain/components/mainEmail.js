import { MainInput } from "./mainIput"
import { Link } from 'react-router-dom'
import { useState } from "react";
import store from "../../../../redux/store";
export const MainEmail = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleChangeNewEmail = (e) => {
    props.setEmail(e.target.value)
  }
  const handleChangeNewPwd = (e) => {
    props.setPassword(e.target.value)
  }
  return (
    <div className="login-header-email">
      <div style={{ height: "55px" }}>
        <MainInput hint='Email' placeholder='Enter Your Email' handleChangeNewEmail={handleChangeNewEmail} />
      </div>
      <div>
        <Link to='/passwordindex'>
          <p className="login-header-forgot">Forgot password?</p>
        </Link>
        <MainInput hint='Password' placeholder='Enter Your Password' handleChangeNewPwd={handleChangeNewPwd} />
      </div>
    </div>
  )
}