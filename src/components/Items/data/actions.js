const TOGGLE_ITEM = 'COMPONENTS/ITEMS/TOGGLE_ITEM';
const REMOVE_ITEM = 'COMPONENTS/ITEMS/REMOVE_ITEM';

export const toggleItem = item => {
    return {
        type: TOGGLE_ITEM,
        payload: item,
    }
};

export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        payload: id,
    }
};
