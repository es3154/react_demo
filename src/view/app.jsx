
import React from 'react';

export class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                {this.props.children}
            </div>
        );
    }

}