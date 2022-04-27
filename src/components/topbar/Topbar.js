import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import "./topbar.css";

const topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">ACR-SOCIAL</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <Badge badgeContent={4} color="primary" className="topbarIconItem" >
            <Person  />
          </Badge>
          <Badge badgeContent={4} color="secondary" className="topbarIconItem" >
            <Chat  />
          </Badge>
          <Badge badgeContent={4} color="success" className="topbarIconItem" >
            <Notifications  />
          </Badge>
        </div>
        <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default topbar;
