import '../../../styles/style.scss'
import { CreateHeader } from './components/createHeader'
import { CreateMain } from './components/createMain'
import { CreateBtn } from './components/createBtn'
import { CreateContinue } from './components/createContinue'
import store from '../../../redux/store'
import { useState } from 'react'
export const CreateMainComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChangeLogin = () => {
    console.log(1)
    const action = {
      type: 'create',
      data: { email: email, password: password }
    }
    store.dispatch(action)
  }
  return (
    <div className="login-main">
      <div className='create-main-box'>
        <CreateHeader />
        <CreateMain setEmail={setEmail} setPassword={setPassword} />
        <CreateBtn onClick={handleChangeLogin} />
        <CreateContinue />
      </div>
    </div>
  )
}