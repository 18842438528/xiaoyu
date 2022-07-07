import { HomeHeaderComponent } from "../../components/homePage/homeHeader/homeHeaderComponent"
import { HomeSidebarComponent } from "../../components/homePage/homeSidebar/homeSidebarComponent"
import { HomeMainComponent } from "../../components/homePage/homeMain/homeMainComponent"
export const HomePageIndex = () => {
  return (
    <div className="home">
      <HomeHeaderComponent />
      <HomeSidebarComponent />
      <HomeMainComponent />
    </div>
  )
}