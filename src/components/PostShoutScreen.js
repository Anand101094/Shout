import React, { useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

const PostShoutScreen = (props) => {
  const [shout, setShout] = useState("");

  const handleChange = (e) => {
    setShout(e.target.value);
  };

  const postShout = () => {
    let body = {
      body: shout,
    };
    let headers = {
      authorization: localStorage.getItem("userToken")
    }
    axios.post("/shout", body, {headers}).then((res)=>{
      console.log(res)
    })
    console.log(shout);
  };

  const closeModal = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("global-modal"));
  };

  return (
    <div className="post-screen">
      <textarea
        rows="4"
        name="shout"
        onChange={handleChange}
        value={shout}
      ></textarea>
      <button className="btn btn-small pink" onClick={closeModal}>
        Cancel
      </button>
      <button className="btn btn-small pink" onClick={postShout}>
        Post
      </button>
    </div>
  );
};

export default PostShoutScreen;
