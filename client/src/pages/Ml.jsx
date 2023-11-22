import React from "react";
import CustomNavbar from "./CustomNavbar";
import Button from "react-bootstrap/Button";
const Ml = () => {
  const githubUrl1 =
    "https://github.com/immmeenal/Call-Center-ML-Algo/blob/main/TotalCallsPerCity.ipynb";
  const githubUrl2 =
    "https://github.com/immmeenal/Call-Center-ML-Algo/blob/main/Naive_Bayes.ipynb";

  return (
    <>
      <CustomNavbar />
      <div
        style={{
          paddingLeft: "20px",
          paddingright: "20px",
        }}
      >
        <br />
        In the context of the call center dataset, two machine learning
        algorithms were employed: K-Means clustering and Gaussian Naive Bayes.
        <br />
        <br />
      </div>
      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <h3>K-Means Clustering:</h3>
        For K-Means, the dataset was loaded, and the total number of calls per
        city was calculated. The K-Means algorithm was then applied to group
        cities into clusters based on the total call count. The resulting
        clusters were visualized using a bar chart, with each cluster
        representing a group of cities sharing similar call patterns.
        <br />
        <br />
        <Button variant="info" size="lg" href={githubUrl1}>
          Implementation
        </Button>
      </div>
      <br />
      <br />

      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <h3>Gaussian Naive Bayes:</h3>
        <br />
        In the case of Gaussian Naive Bayes, the dataset was prepared by
        dropping rows with missing values in the target variable (Csat Score).
        Features like Response Time, Call Duration In Minutes, and Csat Score
        were selected for training the model. The data was split into training
        and testing sets, and a Gaussian Naive Bayes model was created and
        trained. Predictions were made on the test set, and the model's accuracy
        was evaluated, yielding insights into its performance in sentiment
        prediction. The results, including accuracy percentage and a confusion
        matrix, were displayed to assess the model's effectiveness.
        <br />
        <br />
        <Button variant="info" size="lg" href={githubUrl2}>
          Implementation
        </Button>
      </div>
    </>
  );
};
export default Ml;
