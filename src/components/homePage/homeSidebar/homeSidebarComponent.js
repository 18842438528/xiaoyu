import '../../../styles/homeStyle.scss'
import { useState } from 'react'
import { Navigation } from './components/navigation'
import MenuIcon from '../../../assets/menuIcon.png'
import Video from '../../../assets/video.png'
import Upcoming from '../../../assets/upcoming.png'
import Pupolar from '../../../assets/popular.png'
import Analytics from '../../../assets/analytics.png'
import Products from '../../../assets/products.png'
import Orders from '../../../assets/orders.png'
import Settings from '../../../assets/settings.png'
import Purchases from '../../../assets/purchases.png'
import Payment from '../../../assets/payment.png'
import { NavigationFooter } from './components/navigationFooter'
import { NavigationPhoto } from './components/navigationPhoto'
import { Link } from 'react-router-dom'
export const HomeSidebarComponent = ({ onClick, onHandle }) => {

  return (
    <div className="home-sidebar">
      <p className='home-sidebar-p'>
        Browse
      </p>
      <Navigation src={MenuIcon} item='Home' onClick={onHandle} />
      {/* <Link to='/homepageindex/livepage'> */}
      <Navigation src={Video} item='Live' onClick={onClick} />
      {/* </Link> */}
      <Navigation src={Upcoming} item='Upcoming' />
      <Navigation src={Pupolar} item='Pupolar' />
      <p className='home-sidebar-p'>
        My Account
      </p>
      <Navigation src={Analytics} item='Analytics' />
      <Navigation src={Products} item='Products' />
      <Navigation src={Orders} item='Orders ' />
      <Navigation src={Settings} item='Settings' />
      <p className='home-sidebar-p'>
        SHOPPING
      </p>
      <Navigation src={Purchases} item='Purchases' />
      <Navigation src={Payment} item='Payment' />
      <NavigationFooter />
      <NavigationPhoto />
    </div>
  )
}