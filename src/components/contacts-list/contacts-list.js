import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {allContryAxios, showDetails} from "../../redux/actions/actions";
import {Loading} from "../loading/loading";
import ContactItem from "../contact-item/contact-item";
import {Search} from "../search/search";

import "./contacts-list.css";

const ContactsList = ({data, showDetails, inputChecked}) => {

    useEffect(() => {
        allContryAxios()
    }, [])

    let filterData = data;

    if (data && inputChecked) {
        filterData = Object.values(data).filter(item => item.id%2 === 0)
    }

    const contacts = Object.values(filterData).map((item) =>
        <span
            className = "qwerty"
            key = {item.id}
            onClick = {() => showDetails(item.id)}
        >
        <ContactItem
            id = {item.id}
            firstName = {item.first_name}
        />
        <br />
    </span>)

    const content = <div className = "contacts-content">
        <Search />
        {contacts}
    </div>

    return <span>
        {Object.keys(data).length ? content : <Loading /> }
    </span>
}

const mapStateToProps = ({data, inputChecked}) => {

    return {
        data,
        inputChecked
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    allContryAxios,
    showDetails
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)