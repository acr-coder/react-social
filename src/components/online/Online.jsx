import "./online.css";
import { Badge } from '@mui/material'

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <Badge color="success" variant="dot" invisible={false}>
              <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
              </Badge>
              
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  );
}
