import { HeaderComponent } from "../../components/login/loginHeader/headerComponent"
import { CheckInboxMain } from "../../components/checkInbox/checkInboxMain/mainComponent"
import { CheckFooterComponent } from "../../components/checkInbox/checkInboxFooter/checkFooterComponent"
import '../../styles/style.scss'
export const CheckInboxIndex = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="login-index">
        <CheckInboxMain />
        <CheckFooterComponent />
      </div>
    </div>
  )
}