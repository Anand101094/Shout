import React ,{ useRef, useState } from "react";
import axios from "axios";
import "./profile.scss"

const Profile = (props) => {
  const [image, setImage] = useState(null)
  const imgUpload = useRef(null) 

  const uploadPicture = (event) => {
    let imageToBeUploaded = event.target.files[0]
    setImage(imageToBeUploaded)
    console.log(image)
    let token= localStorage.getItem('userToken')
    console.log(token)
    let formData = new FormData()
    formData.append("imageToBeUploaded", imageToBeUploaded)
    console.log(formData)
    let headers = {
      authorization: token
    }
    axios.post("/user/image" , formData, {headers}).then(res => {
      console.log(res)
    })
  }

  return (
    <div className="row profile-section">
        <div className="card">
          <div className="card-image">
            <img src={props.userDetails.imageUrl} className="responsive-img"/>
            <span className="card-title">{props.userDetails.userName}</span>
            <input type="file" ref={imgUpload} id="img-ipload" name="img" accept="image/*" className="hide" onChange={uploadPicture}/>
            <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => imgUpload.current.click()}>
              <i className="material-icons">camera</i>
            </a>
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
        </div>
    </div>
  );
};

export default Profile;
