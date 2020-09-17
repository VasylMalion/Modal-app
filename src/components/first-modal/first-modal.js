import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {NavLink} from "react-router-dom";

import {
    showAllCountry,
    allContryAxios,
    closeModals,
    changeCheckbox,
    USContryAxios
} from "../../redux/actions/actions";

import "./first-modal.css";

const FirstModal = ({allContryAxios, closeModals, inputChecked, changeCheckbox, USContryAxios}) => {

    return <div className = "modal1">
        <NavLink to = "all-contacts">
            <button
                className = "btnAllContact"
                onClick={() => allContryAxios()}
            >
                All Contacts
            </button>
        </NavLink>
        <NavLink to = "us-contacts">
            <button
                className = "btnUSContact"
                onClick={() => USContryAxios()}
            >
                US Contacts
            </button>
        </NavLink>
        <NavLink to = "/">
            <button
                className = "close"
                onClick = {() => closeModals()}
            >
                Close
            </button>
        </NavLink>
        <span className = "checkbox">
            <input
                type="checkbox"
                checked = {inputChecked}
                onChange = {() => changeCheckbox()}
            />
            Only even
        </span>
    </div>
}

const mapStateToProps = ({inputChecked}) => {

    return {
        inputChecked,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    showAllCountry,
    allContryAxios,
    USContryAxios,
    closeModals,
    changeCheckbox
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FirstModal)