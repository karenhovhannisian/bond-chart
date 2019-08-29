/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import chartDataReducer from "../../store/reducers/chartDataReducer";


class CustomizedLabel extends PureComponent {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;

    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>;
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

class Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/5br7g9d6/';

  render() {
    const {chartData, acumulator} = this.props;
    let dataArr = [];
    if (chartData) {
      dataArr = Object.values(chartData);
      if (acumulator) {
        dataArr.map(el => el.pv = el.pv + acumulator);
      }
    }

    return (
      <LineChart
        width={1000}
        height={500}
        data={dataArr}
        margin={{
          top: 50, right: 30, left: 20, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
      </LineChart>
    );
  }
}

const mapStateToProps = state => {
  return {
    chartData: state.chartDataReducer.chartData
  }
}

export default connect(mapStateToProps)(Chart)
