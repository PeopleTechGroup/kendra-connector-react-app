import React from "react";
import { Grid, Typography, Card, CardContent, makeStyles } from "@material-ui/core";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      width: "100%", // For small screens, display one card per row
    },

  },

}));

const Emoji = ({ label, symbol }) => (
  <span role="img" aria-label={label}>
    {symbol}
  </span>
);

//  array of colors outside the useStyles function
const cardColors = [
  "#E5F4FF",// Color for the second card,Color for the third card
  "#5199ED",  // Color for the first card
  "#282c34",
  "#FFFFFF"

];


const Documentation = () => {
  const classes = useStyles();

  return (
   <div style={{ backgroundColor: "#E5F4FF" }}> {/* background color here */}
    <Grid container spacing={2}>
      {/* 0th row */}
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          AWS Kendra Documentation
        </Typography>
      </Grid>

      {/* First row */}
      <Grid item xs={12} className={classes.card}>
         <Card style={{ backgroundColor: cardColors[4], borderTop: "8px solid #282c34"}}>
          <CardContent style={{ padding: "25px" }}>
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
        <Card style={{ backgroundColor: cardColors[4], borderTop: "8px solid #5966DD"}}>
          <CardContent style={{ padding: "20px" }}>
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
           <Emoji label="Hand Pointer" symbol="👉" />{" "}
               <a href="https://aws.amazon.com/kendra/" target="_blank">Dive Deeper</a>
             </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card style={{ backgroundColor: cardColors[4], borderTop: "8px solid #5966DD" }}>
          <CardContent style={{ padding: "20px" }}>
            <Typography variant="h5" component="h5">
              Alfresco On-Prem Connector
            </Typography>
            <Typography variant="body2">
              Alfresco connector for indexing and searching documents in Alfresco
              On-Prem Repository with support for aspect-based crawling.
            </Typography>
           <Emoji label="Hand Pointer" symbol="👉" />{" "}
             <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-alfresco.html" target="_blank">Dive Deeper</a>
           </CardContent>
        </Card>
      </Grid>

      {/* Third row */}
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card style={{ backgroundColor: cardColors[4], borderTop: "8px solid #5966DD" }}>
          <CardContent style={{ padding: "20px" }}>
            <Typography variant="h5" component="h5">
              Amazon Simple Storage Service (S3) Connector
            </Typography>
            <Typography variant="body2">
              Amazon Kendra’s connector for Amazon Simple Storage Service (S3)
              can be used to add documents and metadata stored in an S3 bucket
              to your Amazon Kendra index. Use the Kendra S3 Connector to also
              crawl Amazon S3 buckets in a secure environment like a VPC.
            </Typography>
             <Emoji label="Hand Pointer" symbol="👉" />{" "}
                <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-s3.html" target="_blank">Dive Deeper</a>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card style={{ backgroundColor: cardColors[4], borderTop: "8px solid #5966DD" }}>
          <CardContent style={{ padding: "20px" }}>
            <Typography variant="h5" component="h5">
              GitHub On-Prem Connector
            </Typography>
            <Typography variant="body2">
              GitHub connector for indexing and searching documents in GitHub
              Enterprise Server data source.
            </Typography>
             <Emoji label="Hand Pointer" symbol="👉" />{" "}
                     <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-github.html" target="_blank">Dive Deeper</a>
          </CardContent>
        </Card>
      </Grid>

      {/* Fourth row */}
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card style={{ backgroundColor: cardColors[4],borderTop: "8px solid #5966DD" }}>
          <CardContent style={{ padding: "20px" }}>
            <Typography variant="h5" component="h5">
              ServiceNow Connector
            </Typography>
            <Typography variant="body2">
              Use the Kendra ServiceNow Connector to index Knowledge Articles,
              Service Catalog documents, and Incidents, along with their
              attachments from ServiceNow, and search for information across this
              content using Kendra Intelligent Search.
            </Typography>
             <Emoji label="Hand Pointer" symbol="👉" />{" "}
                           <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html" target="_blank">Dive Deeper</a>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card style={{ backgroundColor: cardColors[4], borderTop: "8px solid #5966DD" }}>
          <CardContent style={{ padding: "20px" }}>
            <Typography variant="h5" component="h5">
              Microsoft SharePoint Online Connector
            </Typography>
            <Typography variant="body2">
              Amazon Kendra’s connector for SharePoint Online indexes content and
              data in SharePoint Online repositories with support for document
              access attributes and SharePoint and Azure App Only Authentication.
            </Typography>
             <Emoji label="Hand Pointer" symbol="👉" />{" "}
                           <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-v2-sharepoint.html" target="_blank">Dive Deeper</a>

          </CardContent>
        </Card>

      </Grid>
           <Grid item xs={12} sm={6} md={4} lg={4} >
            <Footer/>
           </Grid>
    </Grid>

     </div>


  );
};

export default Documentation;
