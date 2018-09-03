import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import {Loading} from '../Loading';
import {NewsBlock} from "../NewsBlock/index";
import queryString from 'query-string';
import {Pagination} from "../Pagination/index";

class NewsBlockList extends React.Component {


    componentDidMount() {
        console.log('cdm');
        const {location} = this.props;
        const query = queryString.parse(location.search);
        const page = query.page ? Number(query.page) : 1;
        this.props.loadNewsBlockList(page);
    }

    render() {
        const {myNewsBlockList, fetching, location} = this.props;
        const query = queryString.parse(location.search);
        const page = query.page ? Number(query.page) : 1;

        console.log('page', Number(query.page));

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

                            <NewsBlock id={item.id} caption={item.caption} img={item.img}
                                       text={item.text}/>
                        </div>
                    )
                })}
                <Pagination
                    to="/news?page=" numberPages={5} page={page}
                />

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