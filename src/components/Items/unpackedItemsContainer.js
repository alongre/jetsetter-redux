import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onToggleItem, onRemoveItem } from './data/actions';
import Items from './Items';
 
const mapStateToProps = ({items, filter}) => {
    return {
        items: items.filter(item => !item.packed && item.value.includes(filter.unpackedItemFilter)),
        title: 'Unpacked Items',
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onToggleItem,
        onRemoveItem,
    }, dispatch) 
};

export default connect(mapStateToProps,mapDispatchToProps)(Items);