import '../../../../styles/style.scss'
import MenuSearch from '../../../../assets/menuSearch.png'
export const Search = () => {
  return (
    <div className='login-header-search'>
      <span><img src={MenuSearch} alt='' /></span>
      <span><input type="text" placeholder='Search' /></span>
    </div>
  )
}

