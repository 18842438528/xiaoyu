import '../../../styles/style.scss'
import { Title } from '../loginMain/components/title'
import { MainEmail } from './components/mainEmail'
import { MainBtn } from './components/mainBtn'
import { MainContinue } from './components/mainContinue'
import { Link } from 'react-router-dom'

export const MainComponent = () => {
  return (
    <div className="login-main">
      <div className='login-main-box'>
        <Title />
        <MainEmail />
        <Link to='/homepageindex'>
          <MainBtn name="Login" />
        </Link>
        <MainContinue />
      </div>
    </div>
  )
}