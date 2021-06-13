import { AUTH_LOADING, AUTH_LOADED } from '../actions/types';
import { I_ReduxAction } from "../interfaces/reduxAction";

const initialState = {
    isLoading: false,
    user: null,
    otherInfo: null
};

export default function authReducers (state = initialState, action: I_ReduxAction) {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case AUTH_LOADED:
            return {
                isLoading: false,
                user: action.payload.user,
                otherInfo: action.payload.otherInfo
            };
        default:
            return state;
    }
}