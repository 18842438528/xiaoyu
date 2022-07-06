import '../../../styles/style.scss'
import { CreateHeader } from './components/createHeader'
import { CreateMain } from './components/createMain'
import { CreateBtn } from './components/createBtn'
import { CreateContinue } from './components/createContinue'
export const CreateMainComponent=()=>{
    return(
        <div className="login-main">
        <div className='create-main-box'>
          <CreateHeader/>
          <CreateMain/>
          <CreateBtn/>
          <CreateContinue/>
        </div>
    </div>
    )
}