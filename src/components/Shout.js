import React, { useState } from "react";
import ReactDOM from "react-dom"
import { connect } from "react-redux"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import shoutAction from "../redux/actions/shoutAction"
import CommentScreen from "./commentScreen"
import "./shout.scss";
import Modal from "../globalComponent/Modal/Modal";

const Shout = ({ shout, deleteShout, likeShout, unlikeShout, userToken, liked }) => {

  const [commentModal, setCommentModal] = useState(false)

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
        <div className="content-top">
          <span className="user-name teal-text lighten-1">{userName}</span>
          <span className="timestamp">{dayjs(createdAt).fromNow()}</span>
          <span className="body-text">{`${body}`}</span>
        </div>
        <div className="content-bottom favorite-n-comment">
          <span className="favorite">
            <i className={`material-icons fav-icon ${liked ? 'liked' : ''}`}
              onClick={() => liked ? unlikeShout({ shoutId, userToken }) : likeShout({ shoutId, userToken })}>
              {`${liked ? 'favorite' : 'favorite_border'}`}
            </i>{`${likeCount} likes`}
          </span>
          <span className="comment" onClick={() => setCommentModal(true)}><i className="material-icons com-icon">comment</i>{`${commentCount} comments`}</span>
        </div>
      </div>
      <div className="delete-icon" onClick={() => deleteShout({ shoutId, userToken })}><i className="material-icons">delete</i></div>

      {
        commentModal ?
          ReactDOM.createPortal(
            <Modal specs="w4 h7">
              <CommentScreen
                onClose={() => setCommentModal(false)}
                shoutId={shoutId}
              />
            </Modal>,
            document.getElementById("global-modal")
          )
          : null
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userToken: state.user.userToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteShout: (payload) => dispatch(shoutAction.deleteShout(payload)),
    likeShout: (payload) => dispatch(shoutAction.likeShout(payload)),
    unlikeShout: (payload) => dispatch(shoutAction.unlikeShout(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shout);
