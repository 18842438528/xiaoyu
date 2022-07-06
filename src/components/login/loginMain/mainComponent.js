import '../../../styles/style.scss'
import { Title } from '../loginMain/components/title'
import { MainEmail } from './components/mainEmail'
import { MainBtn } from './components/mainBtn'
import { MainContinue } from './components/mainContinue'

export const MainComponent=()=>{
  return(
    <div className="login-main">
        <div className='login-main-box'>
            <Title/>
            <MainEmail/>
            <MainBtn name="Login"/>
            <MainContinue/>
        </div>
    </div>
  )
}