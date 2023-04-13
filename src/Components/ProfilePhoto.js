import React from 'react';
import myImage from "./me.png";
import "./ProfilePhoto.css";

function ProfilePhoto() {
  return (
    <div className="ProfilePhoto">
      <img src={myImage} alt="Profile" height={180}  />
    </div>
  );
}

export default ProfilePhoto;
