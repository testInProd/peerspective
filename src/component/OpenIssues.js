import React from 'react';
import './OpenIssues.css';

export default class OpenIssues extends React.Component {
    constructor (props) {
        super(props);

    }

    render() {
        return (
            <div className="Open-issues-div">
                <ul className="Open-issues-list">
                    <li>What do i do about my friend that is on the wrong track?</li>
                </ul>
            </div>
        )
    }
}