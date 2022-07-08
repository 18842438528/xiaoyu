import store from "../../../../redux/store";
export const MainInput = ({ hint, placeholder, handleChangeNewEmail, handleChangeNewPwd }) => {

  return (
    <div className="main-input">
      <p >{hint}</p>
      <input type="text" placeholder={placeholder} className="input" onChange={handleChangeNewEmail || handleChangeNewPwd} />
    </div>
  )
}