import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const storeChartData = (data) => {
    return {
        type: actionTypes.FETCH_CHART_DATA_SUCCESS,
        data
    }
}

export const getChartDataFail = () => {
    return {
        type: actionTypes.FETCH_CHART_DATA_FAILL
    }
}

export const getChartData = () => {
    return dispatch => {
        axios.get('https://react-chart-efe7d.firebaseio.com/year1.json' )
            .then(res => {
                dispatch(storeChartData(res.data))
            })
            .catch(error => {
                dispatch(getChartDataFail())
            })
    }
}




