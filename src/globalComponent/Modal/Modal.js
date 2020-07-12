import React, { useState, useEffect } from "react";
import "./modal.scss";

const Modal = (props) => {
  const calculateZIndex = () => {
    let zIndex =
      Math.max.apply(null, [
        1000,
        ...Array.prototype.map.call(
          document.querySelectorAll(".modal-main"),
          function (el) {
            return +el.style.zIndex;
          }
        ),
      ]) + 10;
    console.log(zIndex);
    return zIndex;
  };
  const [zIndex] = useState(calculateZIndex);

  return (
    <div className={`${props.classNames} modal-main`}>
      <div className="modal-overlay" style={{ zIndex: (zIndex - 5) }}>
        <div className={`${props.specs} modal-container`} style={{ zIndex: zIndex }}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
