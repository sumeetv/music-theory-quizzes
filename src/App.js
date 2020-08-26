import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import logo from './header.jpg'; import './App.css';

import Home from './Home.js';
import NotesQuiz from './NotesQuiz.js';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <nav>
                                <Link
                                    className="App-link"
                                    to="/"
                                >
                                    Home
                                </Link>
                                <Link
                                    className="App-link"
                                    to="/notes_quiz"
                                >
                                    Notes Quiz
                                </Link>
                    </nav>
                </header>
                <Switch>
                    <Route path="/notes_quiz">
                        <NotesQuiz />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
