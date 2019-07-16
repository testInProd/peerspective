import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
//import pic from './3or4.jpg';
import './App.css';
import Questions from './component/Questions';
import Home from './component/Home';
import Responses from './component/Responses';
import NavBar from './component/NavBar';

function App() {

const Search = (props) => {
    return(
        <div>Search</div>
    )
}

  return (
    <div className="App">
        <BrowserRouter>
          <div  className="App-header">
            <NavBar/>

            <Route exact path="/" component={Home} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/responses" component={Responses} />
            <Route path="/search" component={Search} />
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
