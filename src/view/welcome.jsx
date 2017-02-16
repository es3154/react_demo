
import React from 'react';
import { Link } from 'react-router';

export class Welcome extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>welcome to rect-router</h1>
                <Link to="repos" activeClassName="active">repos</Link><br/>
                <Link to="about" activeClassName="active">about</Link><br/>
                <Link to="p/zhangjy/mlj?l=hhhhh" activeClassName="active">Path参数测试</Link><br/>
                <Link to="form" activeClassName="active">表单测试</Link><br/>
            </div>
        );
    }

}