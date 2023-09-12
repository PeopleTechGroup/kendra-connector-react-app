import React from "react";
import { Grid, Typography, Card, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      width: "100%", // For small screens, display one card per row
    },
  },

}));

//  array of colors outside the useStyles function
const cardColors = [
  "#E5F4FF",// Color for the second card,Color for the third card
  "#E1DDDD",  // Color for the first card
  "#DDEEFF",
  // Add more colors as needed for additional cards
];


const Documentation = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {/* 0th row */}
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          AWS Kendra Documentation
        </Typography>
      </Grid>

      {/* First row */}
      <Grid item xs={12} className={classes.card}>
         <Card style={{ backgroundColor: cardColors[1] }}>
          <CardContent>
            <Typography variant="h5" component="h5">
              Connectors
            </Typography>
            <Typography variant="body2">
              Using connectors makes it easy to synchronize data from multiple
              content repositories with your Amazon Kendra index. Connectors can
              be scheduled to automatically sync your index with your data
              source, so you're always securely searching through the most
              up-to-date content.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Second row */}
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card style={{ backgroundColor: cardColors[0] }}>
          <CardContent>
            <Typography variant="h5" component="h5">
              Why Kendra?
            </Typography>
            <Typography variant="body2">
              In today's information-rich world, enterprises face the challenge
              of efficiently and accurately retrieving crucial information from
              their ever-growing troves of data and content. This is where
              Amazon Kendra steps in as the ideal solution for your
              organization's search and discovery needs.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card style={{ backgroundColor: cardColors[0] }}>
          <CardContent>
            <Typography variant="h5" component="h5">
              Alfresco On-Prem Connector
            </Typography>
            <Typography variant="body2">
              Alfresco connector for indexing and searching documents in Alfresco
              On-Prem Repository with support for aspect-based crawling.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Third row */}
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card style={{ backgroundColor: cardColors[0] }}>
          <CardContent>
            <Typography variant="h5" component="h5">
              Amazon Simple Storage Service (S3) Connector
            </Typography>
            <Typography variant="body2">
              Amazon Kendra’s connector for Amazon Simple Storage Service (S3)
              can be used to add documents and metadata stored in an S3 bucket
              to your Amazon Kendra index. Use the Kendra S3 Connector to also
              crawl Amazon S3 buckets in a secure environment like a VPC.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card style={{ backgroundColor: cardColors[0] }}>
          <CardContent>
            <Typography variant="h5" component="h5">
              GitHub On-Prem Connector
            </Typography>
            <Typography variant="body2">
              GitHub connector for indexing and searching documents in GitHub
              Enterprise Server data source.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Fourth row */}
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card style={{ backgroundColor: cardColors[0] }}>
          <CardContent>
            <Typography variant="h5" component="h5">
              ServiceNow Connector
            </Typography>
            <Typography variant="body2">
              Use the Kendra ServiceNow Connector to index Knowledge Articles,
              Service Catalog documents, and Incidents, along with their
              attachments from ServiceNow, and search for information across this
              content using Kendra Intelligent Search.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card style={{ backgroundColor: cardColors[0] }}>
          <CardContent>
            <Typography variant="h5" component="h5">
              Microsoft SharePoint Online Connector
            </Typography>
            <Typography variant="body2">
              Amazon Kendra’s connector for SharePoint Online indexes content and
              data in SharePoint Online repositories with support for document
              access attributes and SharePoint and Azure App Only Authentication.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Documentation;
