import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {FormAddComment} from "../components/FormAddComment/index";
import {addComment} from "../actions/comments";

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addComment,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(FormAddComment);