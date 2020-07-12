import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Modal from "../globalComponent/Modal/Modal";
import AllShouts from "../components/allShouts";
import Profile from "../components/profile";
import PostShoutScreen from "../components/PostShoutScreen";

const Home = (props) => {
  const [userDetails, setUserDetails] = useState(null);
  const [shouts, setShouts] = useState(null);

  useEffect(() => {
    let headers = {
      authorization: localStorage.getItem("userToken"),
    };
    axios.get("/user", { headers }).then((res) => {
      setUserDetails(res.data);
    });
  }, []);

  const postShout = () => {
    ReactDOM.render(
      <Modal specs="w6 h4">
        <PostShoutScreen />
      </Modal>,
      document.getElementById("global-modal")
    );
  };

  return (
    <div className="row">
      <div className="col s8">
        <div className="shout-btn">
          <span>Wanna shout out loud... I can help</span>
          <button className="btn btn-small blue" onClick={postShout}>
            Shout !!!
          </button>
        </div>
        <AllShouts />
      </div>
      <div className="col s4">
        <Profile userDetails={userDetails ? userDetails.credentials : {}} />
      </div>
    </div>
  );
};

export default Home;
