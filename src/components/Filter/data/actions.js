import {
     ON_UPDATE_PACKED_ITEM_FILTER,
     ON_UPDATE_UNPACKED_ITEM_FILTER } from '../../../store/constants'

     
export const onUpdatePackedItemFilter = filerText => ({
    type: ON_UPDATE_PACKED_ITEM_FILTER,
    payload: filerText,
})

export const onUpdateUnPackedItemFilter = filerText => ({
    type: ON_UPDATE_UNPACKED_ITEM_FILTER,
    payload: filerText,
})