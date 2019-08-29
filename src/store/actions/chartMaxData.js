import * as actionTypes from "./actionTypes";
import axios from "axios";

export const storeMaxChartData = (data) => {
    return {
        type: actionTypes.FETCH_MAX_CHART_DATA_SUCCESS,
        data
    }
}

export const getMaxChartDataFail = () => {
    return {
        type: actionTypes.FETCH_MAX_CHART_DATA_FAILL
    }
}

export const getMaxChartData = () => {
    return dispatch => {
        axios.get('https://react-chart-efe7d.firebaseio.com/max.json' )
            .then(res => {
                console.log(res.data)
                dispatch(storeMaxChartData(res.data))
            })
            .catch(error => {
                dispatch(getMaxChartDataFail())
            })
    }
}