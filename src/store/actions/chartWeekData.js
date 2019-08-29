import * as actionTypes from "./actionTypes";
import axios from "axios";

export const storeWeekChartData = (data) => {
    return {
        type: actionTypes.FETCH_WEEK_CHART_DATA_SUCCESS,
        data
    }
}

export const getWeekChartDataFail = () => {
    return {
        type: actionTypes.FETCH_WEEK_CHART_DATA_FAILL
    }
}

export const getWeekChartData = () => {
    return dispatch => {
        axios.get('https://react-chart-efe7d.firebaseio.com/week.json' )
            .then(res => {
                console.log(res.data)
                dispatch(storeWeekChartData(res.data))
            })
            .catch(error => {
                dispatch(getWeekChartDataFail())
            })
    }
}