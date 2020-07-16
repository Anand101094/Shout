import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Modal from "../globalComponent/Modal/Modal";
import AllShouts from "../components/allShouts";
import Profile from "../components/profile";
import PostShoutScreen from "../components/PostShoutScreen";
import userAction from "../redux/actions/userActions";
import "./home.scss";

const Home = (props) => {
  const [userDetails, setUserDetails] = useState(null);
  const [postModal, setPostModal] = useState(false);

  useEffect(() => {
    props.getUserDetails(props.userToken);
  }, []);

  return (
    <div className="row home-page">
      <div className="col s7">
        <div className="shout-btn">
          <span>Wanna shout out loud... I can help</span>
          <button className="btn btn-small blue" onClick={()=> setPostModal(true)}>
            Shout !!!
          </button>
        </div>
        <AllShouts />
      </div>
      <div className="col s4 offset-s1">
        <Profile userDetails={userDetails ? userDetails.credentials : {}}/>
      </div>
      {postModal
        ? ReactDOM.createPortal(
            <Modal specs="w6 h4">
              <PostShoutScreen 
                onClose = {()=> setPostModal(false)}
              />
            </Modal>,
            document.getElementById("global-modal")
          )
        : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userToken: state.user.userToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails: (payload) => dispatch(userAction.getUserDetails(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
