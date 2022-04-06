import React from 'react'
import '../../styles/components/topbar.css'
import {NotificationsNone, Settings} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbar__wrapper">
            <div className="topLeft">
                <span className="logo">TNTmonitor</span>
            </div>
            <div className="topRight">
                <div className="icon">
                  <NotificationsNone/>
                  <span className="icon__icon-badge">2</span>
                </div>

                <div className="icon">
                  <Settings/>
                </div>
            
                <img src="https://haycafe.vn/wp-content/uploads/2022/03/Avatar-hai-doc.jpg" alt="avt" className="account-avatar" />
            </div>
        </div>
    </div>
  )
}

