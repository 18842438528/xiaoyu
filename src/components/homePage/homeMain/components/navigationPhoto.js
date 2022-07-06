import Photo from '../../../../assets/photo.png'
import Move from '../../../../assets/move.png'
export const NavigationPhoto=()=>{
  return(
   
      <div className='home-portrait'>
            <div className='home-portrait-photo'>
              <img src={Photo} alt=''/>
            </div>
            <span className='home-portrait-name'>Kenny Semba</span><br/>
            <span className='home-portrait-old'>13 Performances</span>
            <div className='home-portrait-move'>
              <img src={Move} alt=''/>
            </div>
          </div>
    
  )
}