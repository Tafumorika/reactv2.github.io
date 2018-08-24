import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {CommentList} from "../components/CommentList/index";
import {addReplyId, commentListRequestStart, commentListRequestSuccess, commentListRequestFailed} from "../actions/comments";


const mapStateToProps = (state) => {
    return {
        myCommentList: state.comments.myCommentList,
        fetching: state.comments.fetching
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        addReplyId,
        commentListRequestStart,
        commentListRequestSuccess,
        commentListRequestFailed
}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);