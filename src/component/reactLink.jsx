import React from 'react';

export class ReactLink extends React.Component {

  constructor() {
    super();
    this.state = { message: 'hello ReactLink' };
  }

  handChange(newValue) {
    this.setState({ message: newValue });
  }

  render() {
    let valueLink = {
      value: this.state.message,
      requestChange: this.handChange.bind(this)
    };

    return (
        <div>
          <input type="text" valueLink={valueLink} />
          <a>{this.state.message}</a>
        </div>

    );
  }

}

export class MyTest extends React.Component {

  constructor() {
    super();
  }

  render() {
    return <h1>MyTest</h1>;
  }
}