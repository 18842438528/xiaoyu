import { MainInput } from "./mainIput"
export const MainEmail=()=>{
  return(
    <div className="login-header-email">
       <div>
        <MainInput hint='Email' placeholder='Enter Your Email'/>
       </div>
      <div>
        <MainInput hint='Password' placeholder='Enter Your Password'/>
      </div>
    </div>
  )
}