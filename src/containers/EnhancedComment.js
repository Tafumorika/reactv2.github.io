import {connect} from 'react-redux';
import {CommentList} from "../components/CommentList/index";


const mapStateToProps = (state) => {
    return {
        myCommentList: state.comments.myCommentList
    }
};

export default connect(mapStateToProps)(CommentList);