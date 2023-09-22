import {
  FormControl,
  Grid,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";
import PageNavigation from "../AppComponents/PageNavigation";

import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import kendraService from "../../services/KendraService";
import { makeStyles } from "@material-ui/core/styles";
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
}));

const CreateIndex = () => {
  const [indexName, setIndexName] = useState("test");
  const [indexDescription, setIndexDescription] = useState("test");
  const classes = useStyles();

  const handleIndexNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
          console.log("Inside the handleIndexNameChange", indexName);
  		setIndexName(event.target.value);
  	};

  const handleIndexDescriptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  		console.log("Inside the handleIndexDescriptionChange", indexDescription);
  		setIndexDescription(event.target.value );
  	};

  const saveKendraIndex = () => {
    console.log("IndexName and IndexDescription ", indexName, indexDescription);
    kendraService
      .createKendraIndex({name: indexName,
                          description: indexDescription})
      .then((response) => {
        return response.data.id;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      spacing={2}
      style={{ padding: 20 }}
      component={Paper}
    >

      <Grid item xs={12}>
              <PageNavigation
                title="New Kendra Index"
                breadcrumbs={[{ title: "Home", href: "/" }, { title: "Indices" }]}
              />
            </Grid>
      <Grid
        container
        item
        xs={6}
        alignItems="center"
        style={{ padding: 20, marginLeft: "100px" }}
      >
        <Grid item xs={3} align="center">
          <Typography variant="h7" component="h7">
            <strong> Index Name : </strong>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <FormControl xs={{ m: 1 }} variant="filled">
            <TextField
              id="filled-textarea"
              label="New Kendra Index Name"
              onChange={handleIndexNameChange}
              placeholder="Name"
              variant="filled"
              inputProps={{
                style: {
                  height: "25px",
                  width: "300px",
                },
              }}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={2}></Grid>

      <Grid
        container
        item
        xs={6}
        alignItems="center"
        style={{ padding: 20, marginLeft: "100px" }}
      >
        <Grid item xs={3} align="center">
          <Typography variant="h7" component="h7">
            <strong> Index Description : </strong>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <FormControl sx={{ m: 1 }} variant="filled">
            <TextField
              id="filled-textarea"
              label="New Kendra Description"
              placeholder="Description"
              onChange={handleIndexDescriptionChange}
              multiline
              variant="filled"
              inputProps={{
                style: {
                  height: "100px",
                  width: "300px",
                },
              }}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid item xs={12} alignItems="center">
        <br />
        <br />
        <Button className={classes.button} variant="contained" onClick={saveKendraIndex}>
          Create
        </Button>
        <br />
      </Grid>
    </Grid>
  );
};

export default CreateIndex;
