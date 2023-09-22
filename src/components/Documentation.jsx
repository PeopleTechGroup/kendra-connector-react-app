import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import kendraOverview from "../images/kendra-overview.png";

const Documentation = () => {
  return (
    <Grid container>
      <Grid item xs={12} style={{ padding: 20 }}>
        <Typography variant="h4" component="h4">
          AWS KENDRA Documentation
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Documentation;
