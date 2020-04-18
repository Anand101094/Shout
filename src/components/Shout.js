import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import "./shout.scss";

const Shout = ({ shout }) => {
  let {
    body,
    userName,
    shoutId,
    likeCount,
    commentCount,
    createdAt,
    userImage
  } = shout;


  dayjs.extend(relativeTime)

  return (
    <div className="shout-card card">
      <div className="user-image">
        <img src={`${userImage}`} alt="User Image" />
      </div>
      <div className="content">
        <span className="user-name teal-text lighten-1">{userName}</span>
        <span className="timestamp">{dayjs(createdAt).fromNow()}</span>
        <span className="body-text">{body}</span>
      </div>
    </div>
  );
};

export default Shout;
