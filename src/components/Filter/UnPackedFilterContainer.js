import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onUpdateUnPackedItemFilter} from './data/actions';
import Filter from './Filter';

const mapStateToProps = ({ filter }) => {
    return {
        searchTerm: filter.unpackedItemFilter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateFilter: onUpdateUnPackedItemFilter,
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter);