import { HomeHeaderComponent } from "../../components/homePage/homeHeader/homeHeaderComponent"
import { HomeSidebarComponent } from "../../components/homePage/homeSidebar/homeSidebarComponent"
import { HomeMainComponent } from "../../components/homePage/homeMain/homeMainComponent"
import { LivePageComponent } from "../../components/livePage/livePageComponent"
import { useState } from "react"
export const HomePageIndex = () => {
  const [page, setPage] = useState(true)
  const [pageLive, setLivePage] = useState(false)

  const handleChangeLive = () => {
    setPage(false)
    setLivePage(true)
  }

  const handleChangeHome = () => {
    setPage(true)
    setLivePage(false)
  }
  return (
    <div className="home">
      <HomeHeaderComponent />
      <HomeSidebarComponent onClick={handleChangeLive} onHandle={handleChangeHome} />
      {page && <HomeMainComponent />}
      {pageLive && <LivePageComponent />}
    </div>
  )
}