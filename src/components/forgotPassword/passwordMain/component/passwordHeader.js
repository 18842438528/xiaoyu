import '../../../../styles/style.scss'
import Arrow from '../../../../assets/arrow.png'
import { Link } from 'react-router-dom'
export const PasswordHeader = () => {
    return (
        <div className="password-header-back">
            <div className="password-header-back-img">
                <Link to='/'>
                    <img src={Arrow} alt="" />
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