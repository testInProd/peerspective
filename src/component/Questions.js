import React from 'react';
import './Questions.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Responses from './Responses';
import OpenIssues from './OpenIssues';
import ModalContainer from './ModalContainer';
import {showModal, hideModal} from '../redux/modalActions';

class Question extends React.Component {
   openAlertModal(event) {
        this.props.showModal({
         open: true,
         title: 'Alert Modal',
//         message: MESSAGE,
         closeModal: this.closeModal
       }, 'alert')
      }

  render() {
    return (
        <div className="Question-css">
          <div className="Question-header">
          Okay, in order to get a perspective,<br/>
          you gotta give one out first.
          </div>
          <OpenIssues />
          <div>
            <form className="theform">
              <input
                className="Question-box"
                type="text"
                name="peerspective"
                placeholder="Here you go..."
              />
              <br />
              <input
                className="textbox"
                type="Submit"
                name="submit"
                value="Give Perspective"
                onClick={this.openAlertModal}
              />
            </form>
          </div>
        </div>
    )
  }
}

function mapStateToPops(state) {
    return state;
};

const mapDispatchToProps = dispatch => ({
 hideModal: () => dispatch(hideModal()),
 showModal: (modalProps, modalType) => {
  dispatch(showModal({ modalProps, modalType }))
 }
})

export default connect(mapStateToPops,mapDispatchToProps)(Question);