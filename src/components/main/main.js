import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {showModalA, showModalB} from "../../redux/actions/actions";
import Modal from "../first-modal/first-modal";
import ModalAllComponents from "../contacts-list/contacts-list";
import {ModalHOC} from "../hoc/modal-hoc";
import ContactDetails from "../contact-details-item/contact-details-item";

import "./main.css";

const Main = ({visibleModalA, visibleModalB, showModalA, showModalB,
                  visibleAllCountry, visibleButtons, visibleDetails, visibleUSCountry}) => {

    const buttons = <div className = "buttons" >
        <button className = "btn_A" onClick = {() => showModalA()} > A </button>
        <button className = "btn_B" onClick = {() => showModalB()}> B </button>
    </div>

    const modalWindowA = <div className = "modal1" >
        <ModalHOC title = "Modal window A">
            <Modal />
        </ModalHOC>
    </div>

    const modalWindowB = <div className = "modal1" >
        <ModalHOC title = "Modal window B">
            <Modal />
        </ModalHOC>
    </div>

    const modalAllContacts = <div className = "modal2" >
        <ModalHOC title = "All contacts" >
            <ModalAllComponents />
        </ModalHOC>
    </div>

    const modalUSContacts = <div className = "modal2" >
        <ModalHOC title = "US contacts" >
            <ModalAllComponents />
        </ModalHOC>
    </div>

    const modalContactsDetails = <div className = "modal3" >
        <ModalHOC title = "Contact's details" >
            <ContactDetails />
        </ModalHOC>
    </div>

    return <div>
            { visibleButtons ? buttons : null }
        <div className = "main">
            { visibleModalA ? modalWindowA : null }
            { visibleModalB ? modalWindowB : null }
            { visibleAllCountry ? modalAllContacts : null }
            { visibleUSCountry? modalUSContacts : null }
            { visibleDetails ? modalContactsDetails : null }
        </div>
    </div>
}

const mapStateToProps = ({ visibleAllCountry, visibleButtons, visibleModalA, visibleModalB, visibleDetails, visibleUSCountry}) => {

    return {
        visibleButtons,
        visibleModalA,
        visibleModalB,
        visibleDetails,
        visibleAllCountry,
        visibleUSCountry
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    showModalA,
    showModalB
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)