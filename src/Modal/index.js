import React from "react";
import { ReactDOM } from "react";

function Modal({ children }) {
    return ReactDOM.createPortal(
       props.children,
       document.getElementById('modal')
    );
}

export { Modal };