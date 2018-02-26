import { combineReducers } from 'redux';
import * as actions from './action'

export const toggleItem = (state, action) => {
    switch(action.type) {
        case actions.TOGGLE_ITEM:
            return !action.packed;
        default:
            return state;
    }
}

export const removeItem = (state, action) => {
    switch(action.type) {
        case actions.REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}

export default combineReducers ({
    toggleItem,
    removeItem,
});