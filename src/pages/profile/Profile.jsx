import React from 'react'
import "./profile.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import Topbar from "../../components/topbar/Topbar"

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar  />  
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
                <img src="/assets/person/1.jpg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">İsa Acarer</h4>
                    <span className="profileInfoDesc">Ne bakıyon dayı...</span>
                </div>
            </div>
            <div className="profileRightBottom">
          <Feed />
        <Rightbar profile />  
        </div> 
        </div>      
        
      </div>
    
      </>
  )
}

export default Profile