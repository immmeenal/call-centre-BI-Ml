import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";
import State from "../components/state";
import Day from "../components/day";
import Reason from "../components/reason";
import Channel from "../components/channel";
import Sentiment from "../components/sentiment";
import CustomNavbar from "./CustomNavbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Operations() {
  return (
    <>
      <CustomNavbar />

      <Box sx={{ flexDirection: "column" }} margin={4}>
        <Grid item>
          <State />
        </Grid>

        <Grid item xs={4}>
          <Day />
        </Grid>

        <Grid item xs={4}>
          <Reason />
        </Grid>

        <Grid item xs={4}>
          <Channel />
        </Grid>

        <Grid item xs={4}>
          <Sentiment />
        </Grid>
      </Box>
    </>
  );
}
