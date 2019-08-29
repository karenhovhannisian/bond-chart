import React, {Component} from 'react';
import Nav from '../Tabs/Tabs'
import Chart from '../Chart/Chart'
import PriseDropdown from '../PriseDropdown/PriseDropdown'

class Layout extends Component{
    state = {
        acumulator: 0
    }

    changeAcumulator = (value) => {
        if (this.state.acumulator !== value) {
            this.setState({acumulator: value})
            this.forceUpdate()
        }
    }

    render() {
        return (
            <div className="container-fluid chart-container">
                <Nav />
                <div className="row">
                    <div className="col">
                        <Chart changeAcumulator={this.changeAcumulator} acumulator={this.state.acumulator} />
                    </div>
                    <div className="col py-5">
                        <PriseDropdown changeAcumulator={this.changeAcumulator} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout