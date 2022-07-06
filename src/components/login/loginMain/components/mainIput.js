export const MainInput = ({ hint, placeholder }) => {
  return (
    <div className="main-input">
      <p >{hint}</p>
      <input type="text" placeholder={placeholder} className="input" />
    </div>
  )
}