import React from 'react';
import ReactDom from 'react-dom';
import { Counter } from './counter.jsx';
import { DynamicView } from './dynamicView.jsx';
import { ReactLink } from './reactLink.jsx';
import { CanvasTest } from './canvasTest.jsx';
import { GeoLocationTest } from './geoLocationTest.jsx';
import { MainTest } from './MainTest.jsx';
import {TodoApp} from './todoApp';


class Hello extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.drawReact = this.drawReact.bind(this);
    this.drawLine = this.drawLine.bind(this);
  }

  drawReact() {
    this.refs.canvasTest.drawReact();
    let jsonData;
    jsonData = {
      a: 2,
      b: 'hhhh',
      d: [1, 2, 3, 4]
    };

    let { a, b, d } = jsonData;
    console.log(a, b, d);

    let [x,y] = [5,6];
    console.log(x,y);
    [x,y] = [y,x];
    console.log(x,y);
  }

  drawLine() {
    this.refs.canvasTest.drawLine();

    console.log(this.defatulFunTest([2, 3]));
    console.log(this.defatulFunTest([2]));
    console.log(this.defatulFunTest1({ x: 1, y: 1 }));
    this.mapTest();
  }

  defatulFunTest([x, y = 1]) {
    return x + y;
  }

  defatulFunTest1({ x, y }) {
    return x + y;
  }

  mapTest() {
    let map = new Map();
    map.set('k1', 'dddddd');
    map.set('k2', 'dddddd');
    map.set('k3', 'dddddd');
    map.set('k4', 'dddddd');
    for (let [key, value] of map) {
      console.log(key + 'is' + value);
    }
  }

  render() {
    let pr = {
      p1: 1,
      p2: 2,
      p3: 3,
      p4: 4,
      inner: 6
    };

    let dynamicDatas = ['hhhh', 'dynamic', 'chilid', 'wwee'];

    return (<div>
      <h1>Hello</h1>

      <h2> {this.props.user} </h2>
      <Counter inner="5" {...pr} />
      <DynamicView results={dynamicDatas} />
      <GeoLocationTest />
      <MainTest />
      <TodoApp/>
    </div>);
  }

}

ReactDom.render(<Hello user="zhangjy" />, document.getElementById('hello'));