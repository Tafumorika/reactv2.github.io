import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {ButtonNews} from "../ButtonNews/index";


class Pagination extends Component {

    render() {
        const {page, numberPages, to} = this.props;
        let pageDecrement = page - 1;
        let pageIncrement = page + 1;
        const myPagination = Array.from({length: 5}, (v , k) => k+1);

        // 5 => .... => [1,2,3,4,5]
        return (
            <div className="button-news-list">
                {(pageDecrement < 1 ) ? null :
                    <ButtonNews to={to} link={pageDecrement}>{'<'}</ButtonNews>
                }
                {myPagination.map((pageNumber) => {
                    return (
                        <ButtonNews to={to} active={page === pageNumber} link={pageNumber}>{pageNumber}</ButtonNews>
                    )
                })}
                {(pageIncrement > numberPages) ? null :
                    <ButtonNews to={to} link={pageIncrement}>{'>'}</ButtonNews>
                }
            </div>
        )
    }

};
Pagination.propTypes = {
    page: PropTypes.number,
    numberPages: PropTypes.number,
    to: PropTypes.string

};
export {Pagination}