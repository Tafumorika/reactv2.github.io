import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import {Loading} from '../Loading';
import {NewsBlock} from "../NewsBlock/index";
import {ButtonNews} from "../ButtonNews/index";
import queryString from 'query-string';

class NewsBlockList extends React.Component {

    componentDidMount() {
        this.props.loadNewsBlockList();
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
                    to="/news"
                />
                <div className="button-news-list">
                    <ButtonNews link={page-1}>{'<'}</ButtonNews>
                    <ButtonNews active={page === 1} link="1">1</ButtonNews>
                    <ButtonNews active={page === 2} link="2">2</ButtonNews>
                    <ButtonNews active={page === 3} link="3">3</ButtonNews>
                    <ButtonNews active={page === 4} link="4">4</ButtonNews>
                    <ButtonNews active={page === 5} link="5">5</ButtonNews>
                    <ButtonNews link={page + 1}>{'>'}</ButtonNews>
                </div>

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