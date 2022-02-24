import React from 'react'
import './Loading.scss'
function Loading() {
  return (
    <div>
      <div className='loading-overlay'>
        {/* LOADING 1 */}
        {/* <div className="loader"></div> */}

        {/* LOADING 2 */}
        <div className="box">
          <div className="container">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div >
      
    </div>
  )
}
export default Loading