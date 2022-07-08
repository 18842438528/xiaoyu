import { useState } from 'react'
import { MainInput } from '../../../login/loginMain/components/mainIput'
export const CreateMain = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleChangeNewEmail = (e) => {
    props.setEmail(e.target.value)
  }
  const handleChangeNewPwd = (e) => {
    props.setPassword(e.target.value)
  }

  return (
    <div >
      <div style={{ height: "55px" }}>
        <MainInput hint='Email' placeholder='Enter Your Email' handleChangeNewEmail={handleChangeNewEmail} />
      </div>
      <div className='ceate-main-input'>
        <MainInput hint='Password' placeholder='Enter Your Password' handleChangeNewPwd={handleChangeNewPwd} />
        <MainInput hint='' placeholder='Confirm Your Password' />
      </div>
    </div>
  )
}