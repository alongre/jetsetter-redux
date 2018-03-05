import { ON_TOGGLE_ITEM, ON_REMOVE_ITEM } from '../../../store/constants';

export const onToggleItem = item => ({
    type: ON_TOGGLE_ITEM,
    payload: item,
});

export const onRemoveItem = id => ({
    type: ON_REMOVE_ITEM,
    payload: id,
});
