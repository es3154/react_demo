import React from 'react';

export class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.tick = this.tick.bind(this);

    this.p5 = 'GGGGGGGGGGGGGGGGGGGGGG';
  }

  tick() {
    let inner = parseInt(this.props.inner);
    this.setState({ count: this.state.count + inner });
    this.p5 = 'G' + this.state.count;
    // this.state.count = this.state.count + inner;
    // this.forceUpdate();
  }

  render() {
    return (
        <div onClick={this.tick}>
          <p>Click:{this.state.count}</p>
          <p>{this.p5}</p>
          <p>{this.props.p2}</p>
          <p>{this.props.p3}</p>
          <p>{this.props.p4}</p>
        </div>
    );
  }

}


