import * as actionTypes from '../actions/actionTypes'

const initialState = {
    chartData: {}
}
 const reducer = (state = initialState, action) => {
     switch (action.type) {
         case actionTypes.FETCH_CHART_DATA_SUCCESS:
             return {
                 ...state,
                 chartData: action.data,
             }
         case actionTypes.FETCH_CHART_DATA_FAILL:
             return {
                 ...state
             }
         case actionTypes.FETCH_WEEK_CHART_DATA_SUCCESS:
             return {
                 ...state,
                 chartData: action.data,
             }
         case actionTypes.FETCH_WEEK_CHART_DATA_FAILL:
             return {
                 ...state
             }
         case actionTypes.FETCH_MAX_CHART_DATA_SUCCESS:
             return {
                 ...state,
                 chartData: action.data,
             }
         case actionTypes.FETCH_MAX_CHART_DATA_FAILL:
             return {
                 ...state
             }
         case actionTypes.FETCH_QUARTER_CHART_DATA_SUCCESS:
             return {
                 ...state,
                 chartData: action.data,
             }
         case actionTypes.FETCH_QUARTER_CHART_DATA_FAILL:
             return {
                 ...state
             }
         case actionTypes.FETCH_MONTH_CHART_DATA_SUCCESS:
             return {
                 ...state,
                 chartData: action.data,
             }
         case actionTypes.FETCH_MONTH_CHART_DATA_FAILL:
             return {
                 ...state
             }
         default:
             return state;
     }
 }

 export default reducer;
