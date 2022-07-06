import { MainInput } from '../../../login/loginMain/components/mainIput'
export const CreateMain=()=>{
  return(
    <div >
     <div style={{height:"55px"}}>
        <MainInput hint='Email' placeholder='Enter Your Email'/>
       </div> 
       <div className='ceate-main-input'>
     
        <MainInput hint='Password' placeholder='Enter Your Password'/>
        <MainInput hint='' placeholder='Confirm Your Password'/>
      </div>
    </div>
  )
}