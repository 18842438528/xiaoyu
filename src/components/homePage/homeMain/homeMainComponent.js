import '../../../styles/homeStyle.scss'
import { MainType } from './components/mainType'
import { MainTypeBar } from './components/mainLiveBar'
import { MainAilgn } from './components/mainAlign'
export const HomeMainComponent = ()=>{
  return(
    <div className="home-main">
        <MainType/>
        <MainTypeBar livename='Live'/>
        <MainAilgn/>
        <MainTypeBar livename='Upcoming'/>
        <MainAilgn/>
        <MainTypeBar livename='Popular'/>
        <MainAilgn/>
    </div>
  )
}