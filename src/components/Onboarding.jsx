import React from "react";
import { Card, CardContent, Grid, Typography, Link } from "@material-ui/core";
import Footer from "./AppComponents/Footer";

const Step = ({ title, description }) => (
  <Grid item xs={12} style={{ padding: "20px 0" }}>
    <Typography variant="h6" component="h6">
      {title}
    </Typography>
    <Typography>{description}</Typography>
  </Grid>
);

const Emoji = ({ label, symbol }) => (
  <span role="img" aria-label={label}>
    {symbol}
  </span>
);

const Onboarding = () => {
  return (
    <Card style={{ padding: 20 }}>
      <CardContent>
        <Typography variant="h4" component="h4" gutterBottom>
          Onboarding Process
        </Typography>
        <Grid container spacing={3}>
          <Step
            title="Step 1: Understanding the Project"
            description={
              <>
                Follow the mentioned links:
                <ul>
                  <li>
                    <Emoji label="Hand Pointer" symbol="👉" />{" "}
                    <Link
                      href="https://aws.amazon.com/kendra/connectors/"
                      target="_blank"
                    >
                      AWS Kendra Connectors
                    </Link>
                  </li>
                  <li>
                    <Emoji label="Hand Pointer" symbol="👉" />{" "}
                    <Link
                      href="https://docs.aws.amazon.com/kendra/latest/dg/data-sources.html"
                      target="_blank"
                    >
                      Data Sources in Kendra
                    </Link>
                  </li>
                  <li>
                    <Emoji label="Hand Pointer" symbol="👉" />{" "}
                    <Link
                      href="https://catalog.us-east-1.prod.workshops.aws/workshops/df64824d-abbe-4b0d-8b31-8752bceabade/en-US/000-introduction"
                      target="_blank"
                    >
                      Workshop Introduction
                    </Link>
                  </li>
                </ul>
              </>
            }
          />
          <Step
            title="Step 2: Clone the GitHub Repository - Backend"
            description={
              <>
                Clone the Java SpringBoot application repository:
                <br />
                <Emoji label="Hand Pointer" symbol="👉" />{" "}
                <Link
                  href="https://github.com/orgs/PeopleTechGroup/repositories"
                  target="_blank"
                >
                  Java SpringBoot Repository
                </Link>
              </>
            }
          />
          <Step
            title="Step 3: Clone the GitHub Repository - Frontend"
            description={
              <>
                Clone the React app repository and install dependencies:
                <ul>
                  <li>
                    <Emoji label="Hand Pointer" symbol="👉" /> Clone:{" "}
                    <Link
                      href="https://github.com/PeopleTechGroup/kendra-connector-react-app"
                      target="_blank"
                    >
                      React App Repository
                    </Link>
                  </li>
                  <li>
                    <Emoji label="Hand Pointer" symbol="👉" /> Install
                    dependencies:
                    <pre>
                      npm install @mui/material @emotion/react @emotion/styled
                      --legacy-peer-deps
                      <br />
                      npm install @mui/icons-material --legacy-peer-deps
                      <br />
                      npm install react-router-dom
                      <br />
                      npm install @material-ui/icons --force
                    </pre>
                  </li>
                </ul>
              </>
            }
          />
          <Step
            title="Step 4: Obtain AWS IAM and Access Keys"
            description={
              <>
                Request AWS IAM role Access Key and Password, as well as AWS
                Access Key and Secret Key for accessing the backend code base.
                Email:{" "}
                <Link href="mailto:sreenivasulu.dasari@peopletech.com">
                  sreenivasulu.dasari@peopletech.com
                </Link>
              </>
            }
          />
          <Step
            title="Step 5: Join Request on tree.taiga.io"
            description="Submit a join request on tree.taiga.io"
          />
        </Grid>
      </CardContent>
      <Grid item xs={12} style={{ padding: 20 }}>
        <Footer />
      </Grid>
      <style>{`
        /* Remove bullets from the ul */
        ul {
          list-style-type: none;
          padding-left: 0;
        }
      `}</style>
    </Card>
  );
};

export default Onboarding;
