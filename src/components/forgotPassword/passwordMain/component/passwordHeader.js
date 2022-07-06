import '../../../../styles/style.scss'
import arrow from '../../../../assets/arrow-w-glyph-12 1.png'
export const PasswordHeader = ()=>{
    return(
        <div className="password-header-back">
            <div className="password-header-back-img">
                 <img src={arrow} alt=""/>
            </div>
           <div className='password-header-back-span'>
             <span>
            Back to Login
            </span>
           </div>
           
           
        </div>
    )
}