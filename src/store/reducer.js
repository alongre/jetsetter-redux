import { combineReducers } from 'redux';
// import { reducer as countDown } from '../components/CountDown';
// import { reducer as Filter } from '../components/Filter';
// import { reducer as Item } from '../components/Item';
import * as items from '../components/Items';
// import { reducer as NewItem } from '../components/NewItem';

export default combineReducers({
    // countDown,
    // Filter,
    // Item,
    items.reducer,
    // NewItem,
})