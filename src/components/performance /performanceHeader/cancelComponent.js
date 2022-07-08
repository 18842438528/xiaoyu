import Glyph from '../../../assets/glyph.png'
export const PerformanceCancel = () => {
  return (
    <div className="per-header-gross">
      <div className='per-header-cancel'>
        <div className='per-header-cancel-img'>
          <img src={Glyph} alt='' />
        </div>
        Cancel & Return
      </div>
      <div>
        Schedule a Performance
      </div>
      <div className='per-header-step'>
        Step 1 of 3
      </div>

    </div>
  )
}