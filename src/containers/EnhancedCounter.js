import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {Counter} from "../components/Counter/index";
import {decrement, increment} from "../actions/counter";


const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        increment,
        decrement
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);