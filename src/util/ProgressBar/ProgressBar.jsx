import React from 'react'
import './ProgressBar.scss'
export const ProgressBar = ({process, total }) => {
  
  const handleCal = () => {
    if (total && total !== 0) {
      if (process) {
        return process.process/total*100
      }
      else {
        return 0
      }
    }
    else {
      return 0
    }
    return 0
  }
  return (
    <div className='progress-custome-1'>
        <div className="progress__fill" style={{width: `${handleCal()}%`}}></div>
        <span className="progress__text">{process ? process.process: 0}/{total ? total:0}</span>
        {/* <span className="progress__text">{process && total ? Math.round(process.process/total*100): 0}%</span> */}

    
    </div>

  )
}
