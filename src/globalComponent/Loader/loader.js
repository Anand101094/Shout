import React from "react"
import "./loader.scss"

const Loader = (props) => {
    return (
        <div className="loader-wrapper">
            <div id="bird">
                <div class="lowerLip"></div>
                <div class="crest"></div>
                <div class="face"></div>
                <div class="cheek"></div>
                <div class="eye"></div>
                <div class="upperLip"></div>
            </div>
        </div>
    )
}

export default Loader