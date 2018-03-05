import {
    ON_UPDATE_PACKED_ITEM_FILTER,
    ON_UPDATE_UNPACKED_ITEM_FILTER } from '../../../store/constants' 

export default function(state = { packedItemFilter: '', unpackedItemFilter: '' }, action) {
    switch(action.type) {
        case ON_UPDATE_PACKED_ITEM_FILTER:
            return {...state, packedItemFilter: action.payload };
        case ON_UPDATE_UNPACKED_ITEM_FILTER:
            return {...state, unpackedItemFilter: action.payload};
        default:
            return state;    
    }
}