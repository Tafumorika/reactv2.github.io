import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import {Loading} from '../Loading';
import {NewsBlock} from "../NewsBlock/index";

class NewsBlockList extends React.Component {

    componentDidMount() {
        this.props.loadNewsBlockList();
    }

    render() {
        const {myNewsBlockList, fetching} = this.props;
        if (fetching === true) {
            return (<Loading/>)
        }
        const newBlockList = Object.keys(myNewsBlockList);
        return (
            <nav className="newsBlockList">
                {newBlockList.map((key, index) => {
                    const item = myNewsBlockList[key]
                    console.log('!!!', newBlockList);
                    return (
                        <div key={item.id}>
                            {index === 0 ? '' : <hr/>}
                            <NewsBlock id={item.id} caption={item.caption} img={item.img}
                                       text={item.text}/>
                        </div>
                    )
                })}
            </nav>
        )

    }

};

NewsBlockList.propTypes = {
    myNewsBlockList: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.string,
        img: PropTypes.string,
        name: PropTypes.string,
        text: PropTypes.string
    })),
    loadNewsBlockList: PropTypes.func,
};
export {NewsBlockList};