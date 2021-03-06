import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {CommentList} from "../components/CommentList/index";
import {addReplyId, loadCommentList} from "../actions/comments";


const mapStateToProps = (state) => {
    return {
        myCommentList: state.comments.myCommentList,
        fetching: state.comments.fetching
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        addReplyId,
        loadCommentList
}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);