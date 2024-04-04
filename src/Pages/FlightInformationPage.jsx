import React from "react";
import FlightInformationPageHeader
import "./FlightPageInfo.css";
function FlightInformationPage() {
  return (
    <div className="FlightInfoPage">
      <FlightInformationPageHeader />
      <FlightInformationPageBody />
    </div>
  );
}

export default FlightInformationPage;
