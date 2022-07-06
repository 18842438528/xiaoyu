import MenuImg from '../../../../assets/Group 1823.png'
import LogoImg from '../../../../assets/Logo.png'
export const Menu = () => {
  return (
    <div className='login-header-img'>
     
      <div className="login-header-img-menu">
        <img src={MenuImg} alt='' />
      </div>
      
      <div className='login-header-img-logo'>
        <img src={LogoImg} alt='' />
        
      </div>
      
      <div className='login-header-perform'>
        
        PerformLive
        
      </div>
    
    </div>
  )
}