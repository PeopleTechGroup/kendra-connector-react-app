import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  TextField,
} from "@material-ui/core";
import PageNavigation from "../AppComponents/PageNavigation";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import Button from "@mui/material/Button";
import Footer from "../AppComponents/Footer";
import CreateIndex from "./CreateIndex";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Item } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const ManageIndices = () => {
  const classes = useStyles();

  return (
    <Grid container xs={12} spacing={5}>
      <Grid item xs={12}>
        <PageNavigation
          title="Kendra Indices"
          breadcrumbs={[{ title: "Home", href: "/" }, { title: "Indices" }]}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" component="h5">
          <strong> Manage Kendra Indices </strong>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ManageIndices;
