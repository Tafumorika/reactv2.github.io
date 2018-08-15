import React, {Component} from 'react';
import './App.css';
import {Header} from '../Header';
import {BoxRed} from '../Box-red';
import {BreadCrumbs} from '../BreadCrumbs';
import {Content} from '../Content';
import {FormAddComment} from '../FormAddComment';
import {CommentList} from '../CommentList/index';
import {Main} from '../Main';
import {Footer} from '../Footer';
import {imgList} from "../../constants/images";
import {Counter} from "../Counter/index";
import EnhancedCounter from '../../containers/EnhancedCounter'

class App extends Component {
    state = {
        myCommentList: [
            {
                id: 1,
                level: 1,
                img: imgList.comment1,
                name: 'Coen Jacobs',
                text: 'It is a long estabished fact that a reader will be distracted by the readable contebt of a page when looking at its layout.',
                date: 'April 14, 2012 '
            },
            {
                id: 2,
                level: 2,
                img: imgList.comment2,
                name: 'Alex Shiels',
                text: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
                date: 'April 14, 2012 '
            },
            {
                id: 3,
                level: 3,
                img: imgList.comment3,
                name: 'Lloyd Budd',
                text: 'This book is a treatise on the theory of ethics, very popular during the Renaissance.',
                date: 'June 27, 2012 '
            },
            {
                id: 4,
                level: 2,
                img: imgList.comment4,
                name: 'Joseph Scott',
                text: 'Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat.Quisque metus enim, venenatis fermentum,mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum.',
                date: 'June 27, 2012 '
            },
            {
                id: 5,
                level: 1,
                img: imgList.comment5,
                name: 'Admin',
                text: 'Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisque metus enim, venenatis fermentum, mollis in, porta et, nibh.Duis vulputate elit in elit.',
                date: 'June 7, 2012 '
            }
        ]
    };


    changeComment = (data) => {
        console.log('click 2', data);
        const dataId = {...data, id: this.state.myCommentList.length+1}
        this.setState ({
            myCommentList: [...this.state.myCommentList, dataId]
        })

    };

    render() {
        return (
            <div className="App">
                <Header/>
                <Main>
                    <BoxRed>January 7, 2017</BoxRed>
                    <BreadCrumbs/>
                    <Content/>
                    <CommentList myCommentList={this.state.myCommentList}/>
                    <FormAddComment changeComment={this.changeComment}/>
                    <EnhancedCounter/>
                </Main>
                <Footer/>

            </div>
        );
    }
}

export default App;
