/**
 * Created by ddxx on 2016/11/16.
 */

import React from 'react';

export class TodoList extends React.Component {

    render() {
        console.log('render');
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }

}