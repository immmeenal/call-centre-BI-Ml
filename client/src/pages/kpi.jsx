import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
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

export default function KPI() {
  const [kpis, setKpis] = useState({
    totalCalls: 0,
    callDurationInHrs: 0,
    callDurationInMins: 0,
    avgCallDurationInMins: 0,
    avgResponseTime: 0,
  });

  useEffect(() => {
    console.log("kpi = ", kpis);
  }, [kpis]);

  useEffect(() => {
    const fetchData = async () => {
      const tc = await axios.get("http://localhost:8802/kpis/tc");
      const cdh = await axios.get("http://localhost:8802/kpis/cdh");
      const cdm = await axios.get("http://localhost:8802/kpis/cdm");
      const adm = await axios.get("http://localhost:8802/kpis/adm");
      const rtp = await axios.get("http://localhost:8802/kpis/rtp");

      console.log(tc, cdh, cdm, adm, rtp);

      setKpis({
        totalCalls: tc.data[0].tc,
        callDurationInHrs: cdh.data[0].cdh,
        callDurationInMins: cdm.data[0].cdm,
        avgCallDurationInMins: adm.data[0].adm,
        avgResponseTime: rtp.data[0].rtp,
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <CustomNavbar />

      <Box sx={{ flexGrow: 1 }} margin={4}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Call
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  variant="h4"
                  color="text.secondary"
                >
                  {kpis.totalCalls}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Call Duration (Hrs)
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  variant="h4"
                  color="text.secondary"
                >
                  {kpis.callDurationInHrs}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Call Duration (Mins)
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  variant="h4"
                  color="text.secondary"
                >
                  {kpis.callDurationInMins}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Average Call Duration (Mins)
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  variant="h4"
                  color="text.secondary"
                >
                  {kpis.avgCallDurationInMins}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Response Time (%)
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  variant="h4"
                  color="text.secondary"
                >
                  {kpis.avgResponseTime}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
