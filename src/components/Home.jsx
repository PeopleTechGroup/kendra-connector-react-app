
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import kendraOverview from "../images/kendra-overview.png";
import Footer from "./Footer"


const Home = () => {
    return (
    <Grid container>
        <Grid item xs={12} style={{ padding: 20 }}>
            <Grid item xs={12} style={{ padding: 20 }}>
            <Typography variant="h2" component="h2">
               KENDRA CONNECTORS
            </Typography>
            </Grid>
            <Grid item xs={12} style={{padding: 20}}>
                <Typography variant="h5" component="h5">
                    Using connectors makes it easy to synchronize data from multiple content repositories
                    with your Amazon Kendra index. Connectors can be scheduled to automatically sync your
                    index with your data source, so you're always securely searching through the most up
                    to date content.
                </Typography>
            </Grid>
            <img src={kendraOverview} alt="Image" />
            <Grid item xs={12} style={{ padding: 20 }}>
                <Footer/>
            </Grid>
        </Grid>
    </Grid>
    )

}

export default Home;