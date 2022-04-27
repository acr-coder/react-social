import "./share.css"

import React from 'react'
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material"

const Share = () => {
  return (
    <div className="share" >
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/1.jpg" alt="" className="shareProfileImg" />
                <input placeholder="Share what you want..." type="text" className="shareInput" />
            </div>
                <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato"  className="shareIcon"  />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue"  className="shareIcon"  />
                        <span className="shareOptionText">Label</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"  />
                        <span className="shareOptionText">Location</span>
                    </div>
                    
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="crimson"  className="shareIcon"  />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">
                    Share
                </button>
            </div>
        </div>
    </div>
  )
}

export default Share