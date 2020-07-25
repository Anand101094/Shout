import React, { useState, useEffect } from "react";

import "./comment_screen.scss"
import { connect } from "react-redux";
import shoutAction from "../redux/actions/shoutAction";
import SingleComment from "./singleComment"

const CommentScreen = (props) => {
    const [comment, setComment] = useState("");

    useEffect(() => {
        props.getShout({ shoutId: props.shoutId })
    }, [])

    const postComment = () => {
        let payload = {
            postData: comment,
            userToken: props.userToken,
            shoutId: props.shoutId
        }
        props.postComment(payload)
        props.getShout({ shoutId: props.shoutId })
        setComment("")
        return
    };

    const closeCommentModal = () => {
        props.resetShoutData()
        props.onClose()
    }

    return (
        <div className="post-screen comment-on-shout-screen">
            {/* <div className="modal-header">Post a Comment</div> */}

            <div className="modal-content">
                <div className="user-profile">
                    {
                        props.shoutsData ?
                            <>
                                <img src={`${props.shoutsData.userImage}`} alt="user-image" className="circle comment-user" />
                                <div className="comment-content">
                                    <span className="username">{`@ ${props.shoutsData.userName}`}</span>
                                    <span className="comment-body">{props.shoutsData.body}</span>
                                </div>
                            </> : null
                    }
                </div>

                <h5 className="post-note">Post a Comment</h5>

                <input
                    id="text"
                    type="text"
                    className="comment"
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                />

                <div className="comments-data">
                    {
                        props.shoutsData ?
                            props.shoutsData.comments.map((comment, index) => {
                                return <SingleComment key={index} comment={comment} />
                            })
                            : null
                    }
                </div>
            </div>
            <div className="modal-footer">
                <button className="btn btn-small pink btn-cancel" onClick={closeCommentModal}>Cancel</button>
                <button className="btn btn-small pink btn-post" onClick={postComment}>Post</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userToken: state.user.userToken,
        shoutsData: state.shoutsData.shoutsCommentData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postComment: (payload) => dispatch(shoutAction.postComment(payload)),
        getShout: (payload) => dispatch(shoutAction.getShout(payload)),
        resetShoutData: () => dispatch(shoutAction.resetShoutData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentScreen);
