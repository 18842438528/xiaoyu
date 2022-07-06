import '../../styles/style.scss'
import { HeaderComponent } from '../../components/login/loginHeader/headerComponent'
import { CreateMainComponent } from '../../components/create/createMain/createMainComponent'
import { CreateFooterComponent } from '../../components/create/createFooter/createFooterComponent'

export const CreateIndex = () => {
  return (
    <div>
      <HeaderComponent />
      <div className='login-index'>
        <CreateMainComponent />
        <CreateFooterComponent />
      </div>
    </div>
  )
}