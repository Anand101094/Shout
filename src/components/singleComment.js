import React from "react"


const SingleComment = ({ comment }) => {
    return (
        <div className="single-comment">
            <img src={`${comment.userImage}`} alt="user-image" className="circle comment-user" />
            <div className="comment-content">
                <span className="username">{`@ ${comment.username}`}</span>
                <span className="comment-body">{comment.body}</span>
            </div>
        </div>
    )
}

export default SingleComment