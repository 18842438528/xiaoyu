import * as React from 'react';
import TextField from '@mui/material/TextField';
export const PerformanceDatails = () => {

  return (
    <div className="per-main-details">
      <div className="per-main-details-p">
        Details
      </div>
      <div className='per-main-details-name'>
        Performance Name
      </div>
      <div className='per-main-details-time'>
        0/400
      </div>
      <div className='per-main-details-desc'>
        <TextField id="outlined-basic" label="2020 DJ Equipment Review" variant="outlined" placeholder='2020 DJ Equipment Review' />
      </div>
      <div className='per-main-details-name'>
        Description
      </div>
      <div className='per-main-details-des'>
        <TextField id="outlined-basic" label="Provide a summary of your performance" variant="outlined" />
      </div>

    </div>
  )
}