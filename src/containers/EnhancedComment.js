import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {CommentList} from "../components/CommentList/index";
import {addReplyId} from "../actions/comments";


const mapStateToProps = (state) => {
    return {
        myCommentList: state.comments.myCommentList
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        addReplyId
}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);