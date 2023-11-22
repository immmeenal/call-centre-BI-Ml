import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
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

export default function Analytics() {
  return (
    <>
      <CustomNavbar />

      <Box sx={{ flexGrow: 1 }} margin={4}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Machine Learning Algorithm
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/ml">
                  Click Here
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Visualizations (Power BI)
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/Powerbi">
                  Click Here
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
