export const MainInput=({hint,placeholder})=>{
  return(
    
       <div>
        <p >{hint}</p>
        <input type="text" placeholder={placeholder} className="input"/>
      </div>
      
    
  )
}