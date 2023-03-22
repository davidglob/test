import React from "react";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

const CustomCard = ({ index, userId, title, completed }) => {
  return (
    <Grid
      key={`card-${index}`}
      item
      xs={2}
      sm={4}
      md={4}
      lg={8}
      style={{ display: "flex" }}
    >
      <Card sx={{ width: "100%" }}>
        <CardHeader title={`Card-${index}`} subheader={`User id: ${userId}`} />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {`Status: ${completed}`}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CustomCard;
