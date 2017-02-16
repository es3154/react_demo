import React from 'react';

export class CanvasTest extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  getCtx() {
    const myCanvas = this.refs.myCanvas;
    return myCanvas.getContext("2d");
  }

  drawReact() {
    const ctx = this.getCtx();
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0, 10, 200, 200);
  }

  drawLine() {
    const ctx = this.getCtx();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 100);
    ctx.stroke();
  }

  render() {
    return <canvas ref="myCanvas" width="300" height="300" />;
  }
}