//rafce
import React from "react";
import star from "../assets/star.jpeg";
import CustomNavbar from "./CustomNavbar";
const StarSchema = () => {
  return (
    <>
      <CustomNavbar />
      <div
        style={{
          paddingLeft: "20px",
          paddingright: "20px",
        }}
      >
        <div>
          <br />
          In the call center dataset, a well-structured Star Schema is employed
          for efficient and organized data representation. The Star Schema
          revolves around a central Fact Table, where the primary focus is on
          call-related metrics, and various Dimension Tables branching out to
          provide contextual details. <br />
          <br /> The primary Dimensions in this schema include:
        </div>
        <div>
          1.Customer Dimension: Contains information about customers, such as
          customer ID.
          <br />
          2.Call Center Dimension: Encompasses details about different call
          centers, including center ID.
          <br />
          3.Reason Dimension: Provides insights into the reasons for customer
          calls, identified by a unique reason ID.
          <br />
          4.Channel Dimension: Describes the communication channels utilized
          during calls, identified by a unique channel ID.
          <br />
          5.State Dimension: Holds details about the geographical locations or
          states, identified by a unique state ID.
          <br />
          6.Time Dimension: Encompasses time-related information for effective
          temporal analysis, identified by a unique time ID.
          <br />
          <br />
        </div>

        <div>
          <br />
          <div
            style={{
              paddingRight: "20px",
            }}
          >
            <h5>
              The central Fact Table is designed with a granular focus on the
              call per minute metric, where the grain of the data is each call,
              and the primary key is represented by a surrogate key, typically
              named 'fact ID.' This surrogate key serves as a unique identifier
              for each record in the Fact Table.
            </h5>
            <br />
            <br />
            The Fact Table incorporates various attributes, including:
            <div>
              1.Customer ID: Identifying the customer associated with the call.
              <br />
              2.Center ID: Identifying the call center handling the call.
              <br />
              3.Reason ID: Denoting the specific reason for the customer's call.
              <br />
              4.Channel ID: Identifying the communication channel utilized.
              <br />
              5.State ID: Indicating the geographical location or state
              associated with the call. <br />
              6.Time ID: Identifying the temporal details of the call. <br />
              7.Call ID: Providing a unique identifier for each call. <br />
              8.Response Time: Measuring the time taken to respond to the call.{" "}
              <br />
              9.Call Timestamp: Capturing the timestamp when the call occurred.{" "}
              <br />
              10.Sentiment: Reflecting the sentiment associated with the call.{" "}
              <br />
              11.Call Duration: Quantifying the duration of each call.
              <br />
              12.CSAT Score: Expressing the Customer Satisfaction Score for the
              call.
            </div>
          </div>
          <br />
          <br />
          <img
            src={star}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              paddingLeft: "5px",
            }}
            alt="star"
          />
        </div>
      </div>
    </>
  );
};

export default StarSchema;
