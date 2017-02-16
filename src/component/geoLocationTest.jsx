import React from 'react';

export class GeoLocationTest extends React.Component {
  constructor() {
    super();
    this.state = { location: '获取地理位置中.......' };
    this.showPosition = this.showPosition.bind(this);
    this.errorPosition = this.errorPosition.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.errorPosition);
    } else {
      this.setState({ location: '该浏览器不支持获取地理位置' });
    }
  }

  showPosition(position) {
    const result = 'Latitude:' + position.coords.latitude +
        '<br>Longitude:' + position.coords.longitude;

    this.setState({ location: result });
  }

  errorPosition(error) {
    let result;
    console.log(error);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        result = '用户拒绝对获取地理位置的请求';
        break;
      case error.POSITION_UNAVAILABLE:
        result = '位置信息是不可用的';
        break;
      case error.TIMEOUT:
        result = '请求用户地理位置超时';
        break;
      case error.UNKNOWN_ERR:
        result = '未知错误'
        break;
    }
    this.setState({ location: result });
  }

  render() {
    this.getLocation();
    return <div ref="location">{this.state.location}</div>;
  }
}