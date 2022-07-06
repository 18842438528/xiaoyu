import '../../../../styles/style.scss'
export const MainBtn = ({ name }) => {
  return (
    <div className="login-header-btn">
      <button className="login-header-btn-login">{name}</button>
    </div>
  )
}