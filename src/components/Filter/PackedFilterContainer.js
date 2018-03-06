import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onUpdatePackedItemFilter } from './data/actions';
import Filter from './Filter';

const mapStateToProps = ({ filter }) => {
    return {
        searchTerm: filter.packedItemFilter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateFilter: onUpdatePackedItemFilter,
    }, dispatch)
};

// const mapDispatchToProps = dispatch => ({
//     updateFilter(value) {
//       dispatch(onUpdatePackedItemFilter(value));
//     },
//   });


export default connect(mapStateToProps, mapDispatchToProps)(Filter);