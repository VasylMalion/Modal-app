import React from "react";
import {connect} from "react-redux";

import "./contact-details-item.css";

const ContactDetails = ({detailsUser}) => {

    return <div className = "contact-details">
        <span>ID: {detailsUser.id} </span>
        <span>FirstName: {detailsUser.first_name ? detailsUser.first_name : "unknow"} </span>
        <span>LastName: {detailsUser.last_name ? detailsUser.last_name : "unknow"} </span>
        <span>Country id: {detailsUser.country_id ? detailsUser.country_id : "unknow"} </span>
        <span>Email: {detailsUser.email ? detailsUser.email : "unknow"} </span>
        <span>Phone number: {detailsUser.phone_number} </span>
    </div>
}

const mapStateToProps = ({detailsUser}) => {

    return {
        detailsUser
    }
}

export default connect(mapStateToProps)(ContactDetails)