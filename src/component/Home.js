import React from 'react';
import './Questions.css';
import pic from '../3or4.jpg';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Responses from './Responses';

class Home extends React.Component {
    constructor(props) {
        super(props);

    }

  render() {
  const saveQuestion = <Link to="/questions">Questions</Link>;
    return (
      <div>
        <img src={pic} className="App-logo" alt="logo" />
        <div className="App-description">
        Solve each others issues...
        one perspective at a time.
        </div>
            <form className="theform">
              <input
                className="Question-box"
                type="text"
                name="peerspective"
                placeHolder="Start here..."

              />
              <br />
              <div className="moveButton"/>
              <Link className="textbox"
                    to="/questions"
                    type="Submit"
                    name="submit"
                    value="Get Perspective">Get Perspective
              </Link>

            </form>
        </div>
    )
  }
}

function mapStateToPops(state) {
    return state;
};

//function mapDispatchToProps(dispatch) {
//    return dispatch;
//}

export default connect(mapStateToPops,null)(Home);