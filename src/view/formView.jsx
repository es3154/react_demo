
import React from 'react';
import { browserHistory } from 'react-router';

export class FormView extends React.Component {

    constructor() {
        super();
        this.submitHandle = this.submitHandle.bind(this);
    }

    submitHandle(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const l = event.target.elements[2].value;
        const path = `p/${userName}/${repo}?l=${l}`;
        browserHistory.push(path);
    }

    render() {
        return(
            <div>
            <form onSubmit={this.submitHandle}>
                <input type="text" /><br/>
                <input type="text" /><br/>
                <input type="text" /><br/>
                <input type="submit"/><br/>
            </form>
            </div>
        );
    }

}