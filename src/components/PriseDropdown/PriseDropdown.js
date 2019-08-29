import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {connect} from "react-redux";
import {getChartData} from "../../store/actions";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownValue:  ''
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  chooseValue = (dropdownValue, counter) => {
      this.setState({dropdownValue})
      this.props.changeAcumulator(counter)
      this.props.getChartData()
 }

  render() {
    const {dropdownValue} = this.state;
    return (
      <div className="drop-container">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {dropdownValue}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => this.chooseValue('Yield', 20)}>Yield</DropdownItem>
            <DropdownItem onClick={() => this.chooseValue('Spread', 40)}>Spread</DropdownItem>
            <DropdownItem onClick={() =>this.chooseValue('Price', 60)}>Price</DropdownItem>
            <DropdownItem onClick={() =>this.chooseValue('Clear', 0)}>Clear</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default connect(null, {getChartData})(Example)