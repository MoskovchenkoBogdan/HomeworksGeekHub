import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HelloPage from './components/HelloPage/HelloPage'
import Resume from './components/Resume/Resume'
import Skills from './components/Skills/Skills'
import {Link} from 'react-router-dom'
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="main-page">

                            <h1>HELLO EVERYONE</h1>

                                <Link to="/"><button>Home</button></Link>
                                <Link to="/resume"><button>Resume</button></Link>
                                <Link to="/skills"><button>Skills</button></Link>

                    </div>
<div className="btn-page">
                        <Route path="/" exact component={HelloPage}/>
                        <Route path="/resume" component={Resume}/>
                        <Route path="/skills" component={Skills}/>
</div>

                </div>
            </Router>
        );
    }
}

export default App;
