import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {XBox} from "../XBox/index";
import {IconList} from "../IconList/index";
import {BoxRed} from "../Box-red/index";
import {LinkNews} from "../LinkNews/index";
import {ClearFloat} from "../ClearFloat/index";


class NewsBlock extends Component {

    render () {
        const {caption,img, text} = this.props;
        console.log(this.props);

        return (<div  className="content-news">
                <XBox>
                <BoxRed>January 7, 2017</BoxRed>
                <h1>{caption}</h1>
                <IconList/>
                <img alt="imageContentNews" src={img} className="news-block-avatar"/>
                <p className="text-news-block">{text}</p>
                    <LinkNews/>
                    <ClearFloat/>
                </XBox>
            </div>
        );
    }
};

NewsBlock.propTypes = {
    id: PropTypes.string,
    img: PropTypes.string,
    caption:PropTypes.string,
    text:PropTypes.string,
};

export {NewsBlock}