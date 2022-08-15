import React from 'react'
import './index.css'
// import MyDropdown from '../../component/dropdown'

export default function AlExe() {
  return (
    <div className="alExe-select">
        <div className="alExe-subNav">
            <div className="alExe-model">Model</div>
            <div className="alExe-dp">Dp</div>
            <div className="alExe-sensitive">Sensitive range</div>
        </div>
        <div className="alExe-file">
            <div className="alExe-upload"></div>
        </div>
    </div>
  )
}
