import axios from "axios";
import { FETCH_EARTHQUAKEDATA } from "./action_types";
/**The root url of the api */
const ROOT_URL = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson`;

/**
 * Creates an object of the earthquake data fetched from the api.
 *
 * @returns {Object} Returns the composed aggregate object.
 **/
export function fetchEarthQuakeData() {
  /**Setting the date range */
  let today = new Date();
  let previousMonth = new Date();
  previousMonth.setMonth(previousMonth.getMonth() - 1);

  return function(dispatch) {
    /** An API call to fatch data from backend system*/
    axios
      .get(
        `${ROOT_URL}&starttime=${previousMonth.toDateString()}&endtime=${today.toDateString()}&minmagnitude=5`
      )
      .then(response => {
        /** Emitting an action to store the data in store object*/
        dispatch({
          type: FETCH_EARTHQUAKEDATA,
          payload: response
        });
      });
  };
}
