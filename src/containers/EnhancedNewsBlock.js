import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {NewsBlockList} from "../components/NewsBlockList/index";
import {loadNewsBlockList} from "../actions/newsBlock";
import {withRouter} from 'react-router'


const mapStateToProps = (state) => {
    return {
        myNewsBlockList: state.newsBlocks.myNewsBlockList,
        fetching: state.newsBlocks.fetching
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        loadNewsBlockList: loadNewsBlockList
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsBlockList));