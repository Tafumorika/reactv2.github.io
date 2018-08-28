import React, {Component} from 'react';
import {BoxRed} from '../Box-red';
import {BreadCrumbs} from '../BreadCrumbs/index';
import {Content} from '../Content';
import {XBox} from '../XBox';
import EnhancedCounter from '../../containers/EnhancedCounter';
import EnhancedComment from '../../containers/EnhancedComment';
import EnhancedForm from '../../containers/EnhancedForm';

const NewsBlockOne = () => {
        return (
            <div className="news-block-one">
                <XBox>
                <BoxRed>January 7, 2017</BoxRed>
                <BreadCrumbs/>
                <Content/>
                <EnhancedComment/>
                <EnhancedForm/>
                <EnhancedCounter/>
                </XBox>
            </div>
        );
    };

export {NewsBlockOne};