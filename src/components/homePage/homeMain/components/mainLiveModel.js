export const MainLiveModel = ({ mainItem, img }) => {
  return (
    <div className="main-live-bar-model">
      <div className="main-live-model">
        <img src={img} alt='' />
      </div>
      <div className="main-live-model-item">
        {mainItem}
      </div>
    </div>

  )
}