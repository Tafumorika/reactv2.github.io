import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {BoxRed} from './components/Box-red';
import {BreadCrumbs} from './components/BreadCrumbs';
import {Content} from './components/Content';
import {FormAddComment} from './components/FormAddComment';
import {Footer} from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />
          <div className="main-div">
              <main>

                  <BoxRed />

                  <BreadCrumbs />

                  <Content/>


                      <nav className="comments">
                          <div className="comment1">

                              <img alt="avatar" src="/img/Comment1.JPG" className="avatar"/>
                                  <p className="name-comment"><a href="#link5" className="color-text">Coen Jacobs</a></p>
                                  <p className="text-comment">It is a long estabished fact that a reader will be distracted by the readable contebt of a page when looking at its
                                      layout.</p>

                                  <p className="data-comment">April 14, 2012 <a href="#link6" className="color-text">Reply</a></p>
                          </div>

                          <div className="answer-comment1">
                              <hr/>
                                  <img alt="avatar" src="/img/answer-comment1.JPG" className="avatar"/>
                                      <p className="name-comment"><a href="#link7" className="color-text">Alex Shiels</a></p>
                                      <p className="text-comment">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                                          non-characteristic words etc.</p>

                                      <p className="data-comment">April 14, 2012 <a href="#link8" className="color-text">Reply</a></p>
                          </div>

                          <div className="an-answer-comment1">
                              <hr/>
                                  <img alt="avatar" src="/img/an-answer.JPG" className="avatar"/>
                                      <p className="name-comment">Lloyd Budd</p>
                                      <p className="text-comment">This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                                      <p className="data-comment">June 27, 2012 <a href="#link9" className="color-text">Reply</a></p>
                          </div>

                          <div className="answer2-comment1">
                              <hr/>
                                  <img alt="avatar" src="/img/answer2.JPG" className="avatar"/>
                                      <p className="name-comment">Joseph Scott</p>
                                      <p className="text-comment">Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat.Quisque metus enim, venenatis fermentum,
                                          mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum.</p>
                                      <p className="data-comment">June 27, 2012 <a href="#link10" className="color-text">Reply</a></p>
                          </div>

                          <div className="comment2">
                              <hr/>
                                  <img alt="avatar" src="/img/admin.JPG" className="avatar"/>
                                      <p className="name-comment"><a href="#link11" className="color-text">Admin</a></p>
                                      <p className="text-comment">Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisque metus enim, venenatis fermentum,
                                          mollis in, porta et, nibh.Duis vulputate elit in elit.</p>
                                      <p className="data-comment">June 7, 2012 <a href="#link12" className="color-text">Reply</a></p>
                          </div>
                      </nav>

                      <h3>Add a Comment</h3>
                  <FormAddComment/>

              </main>
          </div>
          <Footer/>

      </div>
    );
  }
}

export default App;
