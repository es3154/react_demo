import React from 'react';

export class ParamView extends React.Component {

    constructor() {
        super();
    }

    render() {
        let name1 = this.props.params.name1,
            name2 = this.props.params.name2,
            l = this.props.location.query.l;
        return (
            <div>
                name1:{name1}<br/>
                name2:{name2}<br/>
                l:{l}<br/>
            </div>
        );
    }

}