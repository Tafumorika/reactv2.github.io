import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {BoxRed} from './components/Box-red';
import {BreadCrumbs} from './components/BreadCrumbs';
import {Content} from './components/Content';
import {FormAddComment} from './components/FormAddComment';
import {CommentList} from './components/CommentList/index';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />
          <Main>
                  <BoxRed />
                  <BreadCrumbs />
                  <Content/>
                   <CommentList/>
                  <FormAddComment/>
          </Main>
          <Footer/>

      </div>
    );
  }
}

export default App;
