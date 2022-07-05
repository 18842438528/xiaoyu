import '../../../styles/style.scss'
import MenuSearch from '../../../assets/Group 2048.png'
export const Search = () => {
  return(
<div className='login-header-search'>
     <span><img src={MenuSearch} alt=''/></span> 
      <span><input type="text" placeholder='Search'/></span>
   
  </div>
  )
}

