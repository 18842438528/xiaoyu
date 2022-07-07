import { MainType } from "../../homePage/homeMain/components/mainType"
import { MainTypeBar } from "../../homePage/homeMain/components/mainLiveBar"
import { MainAilgn } from "../../homePage/homeMain/components/mainAlign"
export const LivePagePer = () => {
  return (
    <div>
      <MainType />
      <MainTypeBar livename='Live' />
      <MainAilgn />
    </div>
  )
}