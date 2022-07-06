import '../../../../styles/homeStyle.scss'
export const Navigation =({src,item})=>{
  return(
    <div className="home-navigation">
      <div className="home-navigation-img">
      <img src={src} alt=""/>
      </div>
      <div className="home-navigation-span">
        
          <span>{item}</span>
          
        
        </div>
    </div>
  )
}