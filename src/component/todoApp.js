/**
 * Created by ddxx on 2016/11/16.
 */
import React from 'react';
import {TodoList} from './totoList';

export class TodoApp extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handSubmit = this.handSubmit.bind(this);
        this.state = {
            'text':'',
            'items':[]
        };
    }

    handleChange(e) {
        this.setState({'text':e.target.value});
        // this.state = {'text':e.target.value};
    }

    handSubmit(e) {
        e.preventDefault();
        let newItem = {
            'text':this.state.text,
            'id':Date.now()
        };

        this.setState((prevState) => ({
            'items':prevState.items.concat(newItem),
            'text':''
        }));
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handSubmit}>
                    <input value={this.state.text} onChange={this.handleChange}/>
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
}


