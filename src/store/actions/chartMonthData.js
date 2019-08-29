import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const storeMonthChartData = (data) => {
    return {
        type: actionTypes.FETCH_MONTH_CHART_DATA_SUCCESS,
        data
    }
}

export const getMonthChartDataFail = () => {
    return {
        type: actionTypes.FETCH_MONTH_CHART_DATA_FAILL
    }
}

export const getMonthChartData = () => {
    return dispatch => {
        axios.get('https://react-chart-efe7d.firebaseio.com/month.json' )
            .then(res => {
                dispatch(storeMonthChartData(res.data))
            })
.catch(error => {
    dispatch(getMonthChartDataFail())
})
}
}


