import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {ButtonNews} from "../ButtonNews/index";


class Pagination extends Component  {

    render(){
    const {page, numberPages, to} = this.props;
    let pageDecrement = page - 1;
    let pageIncrement = page + 1;

    // 5 => .... => [1,2,3,4,5]
    return (
        <div className="button-news-list">
            {(pageDecrement < 1) ? null :
                <ButtonNews to={to} link={pageDecrement}>{'<'}</ButtonNews>
            }
            /*{[1,2,3,4,5]}*/
            <ButtonNews to={to} active={page === 1} link="1">1</ButtonNews>
            <ButtonNews to={to} active={page === 2} link="2">2</ButtonNews>
            <ButtonNews to={to} active={page === 3} link="3">3</ButtonNews>
            <ButtonNews to={to} active={page === 4} link="4">4</ButtonNews>
            <ButtonNews to={to} active={page === 5} link="5">5</ButtonNews>
            {(pageIncrement > numberPages) ? null:
                <ButtonNews to={to} link={pageIncrement}>{'>'}</ButtonNews>
            }
        </div>
    )}

};
Pagination.propTypes = {
    page: PropTypes.number,
    numberPages: PropTypes.number,
    to: PropTypes.string

};
export {Pagination}