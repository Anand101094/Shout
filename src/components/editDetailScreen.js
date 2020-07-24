import React, { useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"


const EditDetailScreen = (props) => {
    const [bio, setBio] = useState("")
    const [location, setLocation] = useState("")
    const [website, setWebsite] = useState("")


    const submitUserDetails = () => {
        let payload = {
            userDetails: { bio, location, website },
            userToken: props.userToken
        }
        props.addUserDetails(payload)
        props.onClose()
    }

    return (
        <>
            <div className="modal-header">
                <span className="header-text">Edit Info</span>
            </div>

            <div className="modal-content">
                <div className="profile-change">Change your Details...</div>
                <div className="input-field">
                    <textarea
                        id="bio"
                        className="bio materialize-textarea"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio} >
                    </textarea>
                    <label for="bio">Bio</label>
                </div>
                <div className="input-field">

                    <input
                        id="website"
                        type="text"
                        className="website"
                        onChange={(e) => setWebsite(e.target.value)}
                        value={website}
                    />
                    <label for="website">Website</label>
                </div>
                <div className="input-field">
                    <input
                        id="location"
                        type="text"
                        className="location"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                    />
                    <label for="location">Location</label>
                </div>
            </div>

            <div className="modal-footer">
                <button className="btn btn-small pink btn-cancel" onClick={props.onClose}>Cancel</button>
                <button className="btn btn-small pink btn-post" onClick={submitUserDetails}>Submit</button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userToken: state.user.userToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserDetails: (payload) => dispatch(userActions.addUserDetails(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDetailScreen)