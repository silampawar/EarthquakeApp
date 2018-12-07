import React from "react";
import { connect } from "react-redux";
import * as actions from "./../action";
import EarthMapContainer from "./EarthMapContainer";


/**@class
 * A component to deal with the data from backend system.
 * This fetched data is passed on to the child components.
 */
class EarthQuakeContainer extends React.Component {

  componentDidMount() {
    /**Action creator, a call to the action function to fetch data */
    this.props.fetchEarthQuakeData();
  }

  render() {
    let quakeData =
      this.props.data && this.props.data.data && this.props.data.data.data
        ? this.props.data.data.data.features
        : {};
    return <EarthMapContainer quakes={quakeData} />;
  }
}
/** Update the props based on the data received */
function mapStateToProps(state) {
  return {
    data: state.earthQuakeData
  };
}

export default connect(
  mapStateToProps,
  actions
)(EarthQuakeContainer);
