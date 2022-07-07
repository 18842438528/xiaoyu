import Frame from '../../../../assets/frame.png'
export const MainLiveModel = ({ mainItem, img }) => {
  return (
    <div className="main-live-bar-model">
      <div className="main-live-model">
        <img src={img} alt='' className='main-live-model-image' />
        <div className="main-live-model-state">
          Live
        </div>
        <div>
          <img src={Frame} alt='' className='main-live-model-img' />
        </div>
      </div>
      <div className="main-live-model-item">
        {mainItem}
      </div>
    </div>

  )
}