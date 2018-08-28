import React, {Component} from 'react';
import './App.css';
import {Header} from '../Header/index';
import {Footer} from '../Footer';
import {Route, Switch} from 'react-router-dom';
import {Home} from "../Home/index";
import {About} from "../About/index";
import {News} from "../News";
import {Error404} from "../Error404/index";
import {NewsBlockOne} from "../NewsBlockOne/index";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/news/:id' component={NewsBlockOne}/>
                    <Route exact path='/about' component={About}/>
                    <Route component={Error404}/>
                </Switch>
                <Footer/>

            </div>
        );
    }
}

export default App;
