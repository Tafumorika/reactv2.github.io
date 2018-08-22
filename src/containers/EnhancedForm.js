import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {FormAddComment} from "../components/FormAddComment/index";
import {addComment, addReplyId} from "../actions/comments";

const mapReplyId = (state) => {
    return {
        replyId: state.comments.replyId
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addComment,
        addReplyId,
    }, dispatch);
};


export default connect(mapReplyId, mapDispatchToProps)(FormAddComment);