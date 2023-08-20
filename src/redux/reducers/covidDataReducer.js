import * as ActionTypes from "../actionType";

const initialState = {
  worldwideData: null,
  countryData: [],
  graphData: null,
  error: null,
};

const covidDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_WORLDWIDE_DATA:
      return {
        ...state,
        worldwideData: action.payload,
        error: null,
      };
    case ActionTypes.FETCH_COUNTRY_DATA:
      return {
        ...state,
        countryData: action.payload,
        error: null,
      };
    case ActionTypes.FETCH_GRAPH_DATA:
      return {
        ...state,
        graphData: action.payload,
        error: null,
      };
    case ActionTypes.FETCH_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default covidDataReducer;
