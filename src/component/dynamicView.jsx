import React from 'react';

export class DynamicView extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    let results = this.props.results;
    return (<div>
      {results.map(result => <p>{result}</p>)}
    </div>);
  }

}
