import './sidebar.css'
import {Event,School,RssFeed,Chat,PlayCircleFilled,Group,Bookmark,HelpOutline,WorkOutline, Close} from '@material-ui/icons';
import CloseFriend from '../closeFriend/CloseFriend';
import {Users} from '../../dummyData'
export default function Sidebar() {
    return (
        <>
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                          <RssFeed className="sidebarIcon" />
                          <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                          <Chat className="sidebarIcon" />
                          <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                          <PlayCircleFilled className="sidebarIcon" />
                          <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                          <Group className="sidebarIcon" />
                          <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                          <Bookmark className="sidebarIcon" />
                          <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                          <HelpOutline className="sidebarIcon" />
                          <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                          <WorkOutline className="sidebarIcon" />
                          <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                          <Event className="sidebarIcon" />
                          <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                          <School className="sidebarIcon" />
                          <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">ShowMore</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                      {Users.map((u) => (
                            <CloseFriend key={u.id} user={u} />
                      ))}
                  
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="yashimg" />
                        <span className="sidebarFriendName">Yash Pawar</span>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
