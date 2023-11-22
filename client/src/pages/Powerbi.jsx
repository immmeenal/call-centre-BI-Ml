import React from "react";
import home from "../assets/home.jpeg";
import grid from "../assets/grid.jpeg";
import CustomNavbar from "./CustomNavbar";

const Powerbi = () => {
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
          <p>
            In the call center dataset utilized within Power BI, there are two
            primary tabs: the "Home" tab and the "Grid" tab. The "Home" tab
            serves as the central dashboard, providing a comprehensive overview
            of key performance indicators (KPIs).
            <br />
            <br />
            Key Performance Indicators (KPIs): <br />
            1.Total number of calls. <br />
            2.Total call duration in hours. <br />
            3.Total call duration in minutes. <br />
            4.Average call duration in minutes. <br />
            5.Response time represented as a percentage. <br /> <br />
            Among the five KPIs featured on this tab are:
          </p>
          <p>
            1. Total Call by Day (Column Chart): Display a column chart that
            shows the total number of calls on each day over a specified time
            period. <br />
            2. Total Calls by State (Filled Map Chart): Create a filled map
            chart that visualizes the total number of calls received from
            different states or regions. <br />
            3. Top Reason for Calls (Tree Map): Implement a tree map chart to
            display the top reasons for calls. Each box in the tree map
            represents a call reason. <br />
            4. Total Calls by Channel (Donut Chart): Create a donut chart to
            showcase the distribution of calls by different communication
            channels.
            <br /> 5. Total Calls by Sentiment (Column Chart): Utilize a column
            chart to illustrate the distribution of calls by sentiment (e.g.,
            positive, negative, neutral). <br />
            6. Total Calls by Call Centre (Bar Chart): Create a bar chart that
            presents the total number of calls handled by each call center or
            department.
          </p>
        </div>

        <div>
          <img
            src={home}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              paddingLeft: "5px",
            }}
            alt="home"
          />
          <br />
          <br />
          <div
            style={{
              paddingRight: "20px",
            }}
          >
            In the "Grid" tab of the Power BI dashboard, the data is presented
            at a granular level, offering a detailed view of each call. This tab
            serves as a comprehensive repository where individual details
            <br /> are meticulously displayed, providing a nuanced understanding
            of each interaction. Users can delve into specific call parameters,
            such as timestamps, caller information, call duration, and other
            relevant details. The granular presentation of data in the grid view
            enhances the analytical capabilities, allowing for in-depth scrutiny
            and analysis of individual call records. This level of detail is
            particularly valuable for pinpointing specific trends, identifying
            outliers, and extracting actionable insights that contribute to a
            thorough evaluation of the call center's performance. The grid view
            thus serves as a powerful tool for users seeking a fine-grained
            exploration of the call center dataset.
          </div>
          <br />
          <br />
          <img
            src={grid}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              paddingLeft: "5px",
            }}
            alt="grid"
          />
        </div>
      </div>
    </>
  );
};

export default Powerbi;
