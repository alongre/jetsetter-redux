import { combineReducers } from 'redux';
// import { reducer as countDown } from '../components/CountDown';
import filter from '../components/Filter/data/reducer';
// import { reducer as Item } from '../components/Item';
import items from '../components/Items/data/reducer';
// import { reducer as NewItem } from '../components/NewItem';

export default combineReducers({
    // countDown,
    // Filter,
    // Item,
    items,
    filter,
    // NewItem,
})