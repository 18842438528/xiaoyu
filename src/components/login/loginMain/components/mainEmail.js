import { MainInput } from "./mainIput"
export const MainEmail=()=>{
  return(
    <div className="login-header-email">
       <div style={{height:"55px"}}>
        <MainInput hint='Email' placeholder='Enter Your Email'/>
       </div>
       
      <div>
      <p className="login-header-forgot">Forgot password?</p>
        <MainInput hint='Password' placeholder='Enter Your Password'/>
      </div>
    </div>
  )
}