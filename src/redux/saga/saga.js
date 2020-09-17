import {call, put, takeEvery} from "redux-saga/effects";

import {
    allContryFailed,
    allContryRequest,
    allContrySuccess,
    USContryFailed,
    USContryRequest,
    USContrySuccess
} from "../actions/actions";

function* watchAllCountry() {
    yield takeEvery("AXIOS_All_COUNTRY", axiosAllContryAsync);
}

function* axiosAllContryAsync() {
    try {
        yield put(allContryRequest());
        const data = yield call(() => {
                return fetch("https://api.dev.pastorsline.com/api/contacts.json?companyId=171&page=3", {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk'
                    }
                }).then(data => data.json())
                    .then(data => data.contacts)
            }
        );
        yield put(allContrySuccess(data));
    } catch (error) {
        yield put(allContryFailed());
    }
}

function* watchUSCountry() {
    yield takeEvery("AXIOS_US_COUNTRY", axiosUSContryAsync);
}

function* axiosUSContryAsync() {
    try {
        yield put(USContryRequest());
        const data = yield call(() => {
                return fetch("https://api.dev.pastorsline.com/api/contacts.json?companyId=171&countryId=226&page=3", {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk'
                    }
                }).then(data => data.json())
                    .then(data => data.contacts)
            }
        );
        yield put(USContrySuccess(data));
    } catch (error) {
        yield put(USContryFailed());
    }
}

export {
    watchAllCountry,
    watchUSCountry
}