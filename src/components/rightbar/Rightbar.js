import { useScrollTrigger } from "@material-ui/core";
import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" className="birthdayImg" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b> 3 Other Friends</b> Have a birthday Today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
      return (
          <>
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">City:</span>
                  <span className="rightbarInfovalue">NewYork</span>
              </div>
          </div>
          <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">From:</span>
                  <span className="rightbarInfovalue">Mumbai</span>
              </div>
          </div>
          <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Relationship:</span>
                  <span className="rightbarInfoKey">Single</span>
              </div>
          </div>
          <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src="assets/person/1.jpeg" alt="" />
                  <span className="rightbarFollowingName">Tejas Pawar</span>
              </div>
              <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
                  <span className="rightbarFollowingName">Yash Pawar</span>
              </div>
              <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
                  <span className="rightbarFollowingName">Ronit Pawar</span>
              </div>
              <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src="assets/person/4.jpeg" alt="" />
                  <span className="rightbarFollowingName">shivam Pawar</span>
              </div>
              <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src="assets/person/5.jpeg" alt="" />
                  <span className="rightbarFollowingName">Tejas Pawar</span>
              </div>
              <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="" />
                  <span className="rightbarFollowingName">Unknown Pawar</span>
              </div>
              <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="" />
                  <span className="rightbarFollowingName">Unknown Pawar</span>
              </div>
              
          </div>
          </>
      )
  }
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    </>
  );
}
