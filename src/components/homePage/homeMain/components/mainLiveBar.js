import SwitchLeft from '../../../../assets/switchLeft.png'
import SwitchRight from '../../../../assets/switchRight.png'
export const MainTypeBar = () => {
  return (
    <div className="main-live-bar">
      <div className="main-live">
        Live
      </div>
      <div className="main-live-view">
        View All
      </div>
      <div className="main-live-switch">
        <img src={SwitchLeft} alt='' />
        <img src={SwitchRight} alt='' />
      </div>
    </div>
  )
}