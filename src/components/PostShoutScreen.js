import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./post_shout_screen.scss"
import { connect } from "react-redux";
import shoutAction from "../redux/actions/shoutAction";

const PostShoutScreen = (props) => {
  const [shout, setShout] = useState("");

  const handleChange = (e) => {
    setShout(e.target.value);
  };

  const postShout = () => {
    props.postShout(shout)
  };

  return (
    <div className="post-screen">
      <div className="modal-header">Post a Shout</div>
      <div className="modal-content">
        <textarea
          rows="4"
          name="shout"
          className="post-textbox"
          onChange={handleChange}
          value={shout}
        ></textarea>
      </div>
      <div className="modal-footer">
        <button className="btn btn-small pink btn-cancel" onClick={props.onClose}>
          Cancel
        </button>
        <button className="btn btn-small pink btn-post" onClick={postShout}>
          Post
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return{
    postShout: (postData) => dispatch(shoutAction.postShout(postData))
  }
}

export default connect(null, mapDispatchToProps)(PostShoutScreen);
