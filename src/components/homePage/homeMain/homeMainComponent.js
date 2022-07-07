import '../../../styles/homeStyle.scss'
import { MainType } from './components/mainType'
import { MainTypeBar } from './components/mainLiveBar'
import { MainLiveModel } from './components/mainLiveModel'
import Rectangle from '../../../assets/rectangle.png'
export const HomeMainComponent = () => {
  return (
    <div className="home-main">
      <MainType />
      <MainTypeBar />
      <MainLiveModel img={Rectangle} mainItem='Top 10 DJ Equipment Picks!' />
    </div>
  )
}