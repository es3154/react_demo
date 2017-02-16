import React from 'react';
import { SetTest } from '../test/es6SetTest.js';

export class MainTest extends React.Component {

  constructor() {
    super();
  }

  render() {

    const setTest = new SetTest();
    let testResult = setTest.test();

    return <div>{testResult}</div>;
  }

}