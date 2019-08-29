import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {connect} from 'react-redux';
import {getChartData, getWeekChartData, getMaxChartData, getQuarterChartData, getMonthChartData} from '../../store/actions'

import TabItem from "./TabItem";

let tabs = [
  {label: "Week", page: 0},
  {label: "Month", page: 1},
  {label: "Quarter", page: 2},
  {label: "Year", page: 3},
  {label: "Max", page: 4},
]

class Nav extends Component {
  state = {
    value: 0
  }

  componentDidMount() {
    if (this.state.value === 0)
      this.handleChange(this.state.value)
  }

  handleChange = (value) => {
    this.setState({value});
    if (value === 3) {
      this.props.getChartData()
    }
    if (value === 2) {
      this.props.getQuarterChartData()
    }
    if (value === 1) {
      this.props.getMonthChartData()
    }
    if (value === 0) {
      this.props.getWeekChartData()
    }
    if (value === 4) {
      this.props.getMaxChartData()
    }
  }

  render() {
    return (
      <Paper square>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e) => this.handleChange(e)}
          aria-label="disabled tabs example"
        >
          {tabs.map((el,i) => <TabItem handleChange={this.handleChange} el={el} key={i} />)}
        </Tabs>
      </Paper>
    );
  }
}

export default connect(null, {getChartData, getWeekChartData, getMaxChartData, getQuarterChartData, getMonthChartData})(Nav);
