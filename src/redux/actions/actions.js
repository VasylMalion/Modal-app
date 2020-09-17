const showModalA = () => {

    return {
        type: "SHOW_MODAL_A"
    }
}

const showModalB = () => {

    return {
        type: "SHOW_MODAL_B"
    }
}

const closeModals = () => {

    return {
        type: "CLOSE_MODALS"
    }
}

const showAllCountry = () => {

    return {
        type: "SHOW_ALL_COUNTRY"
    }
}

const allContryAxios = () => {

    return {
        type: "AXIOS_All_COUNTRY"
    }
}

const allContryRequest = () => {

    return {
        type: "ALL_COUNTRY_REQUEST"
    }
}

const allContrySuccess = (data) => {

    return {
        type: "ALL_COUNTRY_SUCCESS",
        payload: data
    }
}

const allContryFailed = () => {

    return {
        type: "ALL_COUNTRY_FAILED"
    }
}

const showDetails = (id) => {

    return {
        type: "SHOW_DETAILS",
        payload: id
    }
}

const changeCheckbox = () => {

    return {
        type: "CHANGE_CHECKBOX",
    }
}

const USContryAxios = () => {

    return {
        type: "AXIOS_US_COUNTRY"
    }
}

const USContryRequest = () => {

    return {
        type: "US_COUNTRY_REQUEST"
    }
}

const USContrySuccess = (data) => {

    return {
        type: "US_COUNTRY_SUCCESS",
        payload: data
    }
}

const USContryFailed = () => {

    return {
        type: "US_COUNTRY_FAILED"
    }
}

export {
    showModalA,
    showModalB,
    closeModals,
    showDetails,
    showAllCountry,
    allContryAxios,
    allContryFailed,
    allContryRequest,
    allContrySuccess,
    changeCheckbox,
    USContryAxios,
    USContryRequest,
    USContrySuccess,
    USContryFailed
}