const initialState = {
    data: {},
    detailsUser: {},
    inputChecked: false,
    visibleButtons: true,
    visibleModalA: false,
    visibleModalB: false,
    visibleAllCountry: false,
    visibleUSCountry: false,
    visibleDetails: false,
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case "SHOW_MODAL_A":
            return {
                ...state,
                visibleButtons: false,
                visibleModalA: true,
                visibleModalB: false,
            }

        case "SHOW_MODAL_B":
            return {
                ...state,
                visibleButtons: false,
                visibleModalA: false,
                visibleModalB: true,
            }

        case "CLOSE_MODALS":
            return {
                ...state,
                visibleButtons: true,
                visibleModalA: false,
                visibleModalB: false,
                visibleAllCountry: false,
                visibleUSCountry: false,
                visibleDetails: false,
            }

        case "ALL_COUNTRY_SUCCESS":
            return {
                ...state,
                data: action.payload
            }

        case "AXIOS_All_COUNTRY":
            return {
                ...state,
                visibleAllCountry: true,
                visibleUSCountry: false,
                visibleDetails: false
            }

        case "US_COUNTRY_SUCCESS":
            return {
                ...state,
                data: action.payload
            }

        case "AXIOS_US_COUNTRY":
            return {
                ...state,
                visibleAllCountry: false,
                visibleUSCountry: true,
                visibleDetails: false
            }

        case "SHOW_DETAILS":
            const findUser = Object.values(state.data).find(item => item.id === action.payload);

            return {
                ...state,
                visibleDetails: true,
                detailsUser: findUser
            }

        case "CHANGE_CHECKBOX":
            return {
                ...state,
                inputChecked: !state.inputChecked
            }
        default:
            return state;
    }
}

export {reducer}