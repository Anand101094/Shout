import React, { useRef, useState } from "react";
import ReactDOM from "react-dom"
import { connect } from "react-redux"
import axios from "axios";
import dayjs from "dayjs"
import Modal from "../globalComponent/Modal/Modal"
import EditDetailScreen from "./editDetailScreen"
import "./profile.scss"

const Profile = ({ userDetails, ...props }) => {
  const [image, setImage] = useState(null)
  const [editDetailsModal, setEditDetailsModal] = useState(false)
  const imgUpload = useRef(null)

  const uploadPicture = (event) => {
    let imageToBeUploaded = event.target.files[0]
    setImage(imageToBeUploaded)
    let token = localStorage.getItem('userToken')
    let formData = new FormData()
    formData.append("imageToBeUploaded", imageToBeUploaded)
    let headers = {
      authorization: token
    }
    axios.post("/user/image", formData, { headers }).then(res => {
      console.log(res)
    })
  }

  return (
    <div className="row profile-section">
      <div className="card">
        <div className="card-image">
          <img src={userDetails ? userDetails.credentials.imageUrl : ""} className="responsive-img" />
          <input type="file" ref={imgUpload} id="img-ipload" name="img" accept="image/*" className="hide" onChange={uploadPicture} />
          <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => imgUpload.current.click()}>
            <i className="material-icons">camera</i>
          </a>
        </div>
        <div className="card-content">

          <span className="card-title center">{userDetails ? ` @ ${userDetails.credentials.userName}` : null}</span>

          <div className="user user-bio center">
            <p>
              {userDetails && userDetails.credentials.bio ? userDetails.credentials.bio : 'Hey there! I wanna shout.'}
            </p>
          </div>

          <div className="user user-website center">
            <i className="material-icons icon">link</i>
            <a href={userDetails && userDetails.credentials.website}>{userDetails && userDetails.credentials.website ? userDetails.credentials.website : 'Enter website link'}</a>
          </div>


          <div className="user user-location center">
            <i className="material-icons icon">location_on</i><span>{userDetails && userDetails.credentials.location ? userDetails.credentials.location : 'Location'}</span>
          </div>

          <div className="user user-joining-date center">
            <i className="material-icons icon">event</i><span>{userDetails && userDetails.credentials.createdAt ? `Joined on ${dayjs(userDetails.credentials.createdAt).format('MMM-DD-YYYY')}` : ''}</span>
          </div>

          <div className="user logout-n-edit">
            <i className="material-icons icon logout" title="Logout">login</i>
            <i className="material-icons icon edit" title="Edit Details" onClick={() => setEditDetailsModal(true)}>edit</i>
          </div>

        </div>
      </div>

      {
        editDetailsModal ?
          ReactDOM.createPortal(
            <Modal specs="w4 h7 add-user-details">
              <EditDetailScreen
                onClose={() => setEditDetailsModal(false)}
              />
            </Modal>,
            document.getElementById('global-modal')
          ) : null
      }

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.user.userDetails
  }
}

export default connect(mapStateToProps)(Profile);
