const ON_TOGGLE_ITEM = 'COMPONENTS/ITEMS/ON_TOGGLE_ITEM';
const ON_REMOVE_ITEM = 'COMPONENTS/ITEMS/ON_REMOVE_ITEM';

export const toggleItem = item => {
    return {
        type: ON_TOGGLE_ITEM,
        payload: item,
    }
};

export const removeItem = id => {
    return {
        type: ON_TOGGLE_ITEM,
        payload: id,
    }
};
