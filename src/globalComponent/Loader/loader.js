import React from "react"
import "./loader.scss"

const Loader = (props) => {
    return (
        <div className="loader-wrapper">
            <div id="bird">
                <div className="lowerLip"></div>
                <div className="crest"></div>
                <div className="face"></div>
                <div className="cheek"></div>
                <div className="eye"></div>
                <div className="upperLip"></div>
            </div>
        </div>
    )
}

export default Loader