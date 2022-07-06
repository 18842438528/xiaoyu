import '../../../styles/style.scss'
import { CheckInboxHeader } from './components/checkInboxHeader'
import { CheckInboxBtn } from './components/checkInboBtn'
export const CheckInboxMain = () => {
  return (
    <div className="login-main">
      <div className='check-main-box'>
        <CheckInboxHeader />
        <div className='check-btn'>
          <CheckInboxBtn />
        </div>
      </div>
    </div>
  )
}


