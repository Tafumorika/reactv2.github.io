import React, {Component} from 'react';
import './App.css';
import {Header} from '../Header';
import {BoxRed} from '../Box-red';
import {BreadCrumbs} from '../BreadCrumbs';
import {Content} from '../Content';
import {Main} from '../Main';
import {Footer} from '../Footer';
import EnhancedCounter from '../../containers/EnhancedCounter';
import EnhancedComment from '../../containers/EnhancedComment';
import EnhancedForm from '../../containers/EnhancedForm';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main>
                    <BoxRed>January 7, 2017</BoxRed>
                    <BreadCrumbs/>
                    <Content/>
                    <EnhancedComment/>
                    <EnhancedForm/>
                    <EnhancedCounter/>
                </Main>
                <Footer/>

            </div>
        );
    }
}
export default App;
