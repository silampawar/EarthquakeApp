import React from "react";
import EarthQuakeContainer from "./../container/EarthQuakeContainer";
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

/** A parent functional component to display the main page along with heading.**/
export default function App() {
  return (
    <>
<ErrorBoundary>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 margin">
            <div id="map_container" />
            <div id="map">
              <EarthQuakeContainer />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </ErrorBoundary>
    </>
  );
}
