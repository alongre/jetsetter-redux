import { connect } from 'react-redux';

const mapStateToProps = ({state, ownProps}) => {
    return {
        prop: state.prop
    }
}