import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleItem, removeItem } from './data/actions';
import Items from './Items';
 
const mapStateToProps = ({items, filter}) => {
    return {
        items: items.filter(item => item.packed && item.included(filter.packedItemFilter)),
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleItem,
        removeItem,
    }, dispatch) 
};

export default connect(mapStateToProps,mapDispatchToProps)(Items);