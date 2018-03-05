// import { combineReducers } from 'redux';
import { ON_TOGGLE_ITEM, ON_REMOVE_ITEM } from '../../../store/constants';

export default function(state = {}, action) {
    switch (action.type) {
        case ON_TOGGLE_ITEM:
            // const item = state[action.payload.id];
            // return { ...state, [action.payload.id]: { ...item, packed: !item.packed } };
            return state.map(item => {
                if (item.id === action.payload.id) return { ...item, packed: !item.packed  };
                return item;
              }, this);
        case ON_REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload.id);
         default:
            return state;   
    }
}

// const onToggleItem = (state = {}, action) => {
//     switch(action.type) {
//         case actions.ON_TOGGLE_ITEM:
//             const item = state[action.payload.id];
//             return { ...state, [action.payload.id]: { ...item, packed: !item.packed } };
//         default:
//             return state;
//     }
// }

// const onRemoveItem = (state = {}, action) => {
//     switch(action.type) {
//         case actions.ON_REMOVE_ITEM:
//             return state.filter(item => item.id !== action.payload.id);
//         default:
//             return state;
//     }
// }

// export default combineReducers ({
//     items: {
//         onToggleItem,
//         onRemoveItem,
//     }
// });