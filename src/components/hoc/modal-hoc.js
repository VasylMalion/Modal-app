import React from "react";

const ModalHOC = ({title, children}) => {

    return <div className="window">
        <span className = "title"> {title} </span>
            {children}
        </div>
}

export {
    ModalHOC
}
