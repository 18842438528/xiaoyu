import '../../../../styles/style.scss'
import arrow from '../../../../assets/arrow-w-glyph-12 1.png'
import { Link } from 'react-router-dom'
export const PasswordHeader = ()=>{
    return(
        <div className="password-header-back">
            <div className="password-header-back-img">
                <Link to='/'>
                <img src={arrow} alt=""/>
                </Link>
                
            </div>
           <div className='password-header-back-span'>
             <span>
            Back to Login
            </span>
           </div>
           
           
        </div>
    )
}