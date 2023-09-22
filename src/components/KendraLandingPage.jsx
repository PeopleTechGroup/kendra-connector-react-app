import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import kendraOverview from "../images/kendraLogo.jpeg";
import Footer from "./AppComponents/Footer";

const KendraLandingPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} style={{ padding: 20 }}>
        <Grid item xs={12} style={{ padding: 20 }}>
          <Typography variant="h2" component="h2">
            AWS KENDRA
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ padding: 20 }}>
          <Typography variant="h5" component="h5">
            AWS Kendra is a highly accurate and intelligent search service that
            enables your users to search unstructured and structured data using
            natural language processing and advanced search algorithms. It
            returns specific answers to questions, giving users an experience
            that's close to interacting with a human expert. It is highly
            scalable and capable of meeting performance demands, tightly
            integrated with other AWS services such as Amazon S3 and Amazon Lex,
            and offers enterprise-grade security.
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ padding: 20 }}>
          <img src={kendraOverview} alt="Image" />
        </Grid>
        <Grid item xs={12} style={{ padding: 20 }}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default KendraLandingPage;
