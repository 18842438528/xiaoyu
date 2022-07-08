import '../../../../styles/style.scss'
export const MainBtn = ({ name, onClick }) => {
  return (
    <div className="login-header-btn">
      <button className="login-header-btn-login" onClick={onClick}>{name}</button>
    </div>
  )
}