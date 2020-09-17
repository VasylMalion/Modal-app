import React from "react";
import {connect} from "react-redux";

import './contact-item.css';

const ContactItem = ({id, firstName}) => {

    return <span className = "contact-item">
        {id} - {firstName ? firstName : "unknown"}
    </span>
}

const mapStateToProps = ({data}) => {

    return {
        data,
    }
}

export default connect(mapStateToProps)(ContactItem)