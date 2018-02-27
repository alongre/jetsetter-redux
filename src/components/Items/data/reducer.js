import { combineReducers } from 'redux';
import * as actions from './actions'

export const onToggleItem = (state, action) => {
    switch(action.type) {
        case actions.ON_TOGGLE_ITEM:
            return !action.payload.packed;
        default:
            return state;
    }
}

export const onRemoveItem = (state, action) => {
    switch(action.type) {
        case actions.ON_REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}

export default combineReducers ({
    onToggleItem,
    onRemoveItem,
});