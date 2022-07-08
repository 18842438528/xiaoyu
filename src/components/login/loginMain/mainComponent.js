import '../../../styles/style.scss'
import { Title } from '../loginMain/components/title'
import { MainEmail } from './components/mainEmail'
import { MainBtn } from './components/mainBtn'
import { MainContinue } from './components/mainContinue'
import { Link } from 'react-router-dom'
import store from '../../../redux/store'
import { useState } from 'react'

export const MainComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  console.log(store.getState().path)
  const handleChangeLogin = () => {
    console.log(1)
    const action = {
      type: 'login',
      data: { email: email, password: password }
    }
    store.dispatch(action)
  }
  

  return (
    <div className="login-main">
      <div className='login-main-box'>
        <Title />
        <MainEmail setEmail={setEmail} setPassword={setPassword}/>
        <Link to={store.getState().path}>
          <MainBtn name="Login" onClick={handleChangeLogin}/>
        </Link>
        <MainContinue />
      </div>
    </div>
  )
}