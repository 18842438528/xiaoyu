import '../../../../styles/homeStyle.scss'
export const Navigation = ({ src, item, onClick ,value}) => {
  return (
    <div className="home-navigation" style={value===item?{color:'#A01F42',backgroundColor:'#FFF2F4'}:{}} onClick={onClick} >
      <div className="home-navigation-img">
        <img src={src} alt="" />
      </div>
      <div className={"home-navigation-span"} >
        <span >{item}</span>
      </div>
    </div>
  )
}