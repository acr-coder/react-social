import React from 'react'
import "./sidebar.css"
import { Chat, EventBusy, RssFeed, VideoLibrary } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Users } from "../../dummyData"
import Friends from '../friends/Friends';

const Sidebar = () => {
  return (
    <div className='sidebar' >
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon' />
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon' />
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <VideoLibrary className='sidebarIcon' />
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <EventBusy className='sidebarIcon' />
                    <span className="sidebarListItemText">Events</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <Divider><Chip label="FRIENDS" color="primary" /></Divider>
            <ul className="sidebarFriendList">
                {Users.map((f) => {
                    return(
                        <Friends friend={f} key={f.id} />
                    )
                })}
               
            </ul>

        </div>
    </div>
  )
}

export default Sidebar