import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import Topbar from "../../components/topbar/Topbar"
import "./home.css"

const Home = () => {
  return (
      <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar  />  
        <Feed />
        <Rightbar  />
      </div>
    
      </>
    

  )
}

export default Home