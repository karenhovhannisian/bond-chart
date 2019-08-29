import * as actionTypes from "./actionTypes";
import axios from "axios";

export const storeQuarterChartData = (data) => {
    return {
        type: actionTypes.FETCH_QUARTER_CHART_DATA_SUCCESS,
        data
    }
}

export const getQuarterChartDataFail = () => {
    return {
        type: actionTypes.FETCH_QUARTER_CHART_DATA_FAILL
    }
}

export const getQuarterChartData = () => {
    return dispatch => {
        axios.get('https://react-chart-efe7d.firebaseio.com/quarter.json' )
            .then(res => {
                console.log(res.data)
                dispatch(storeQuarterChartData(res.data))
            })
            .catch(error => {
                dispatch(getQuarterChartDataFail())
            })
    }
}