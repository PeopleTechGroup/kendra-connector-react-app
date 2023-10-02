import {
  FormControl,
  Grid,
  Paper,
  Typography,
  TextField,
  Card,
  CardContent
} from "@material-ui/core";
import PageNavigation from "../AppComponents/PageNavigation";

import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import kendraService from "../../services/KendraService";

import { makeStyles } from "@material-ui/core/styles";
import { Item } from "semantic-ui-react";
import Footer from "../AppComponents/Footer";
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


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

interface KendraObject {
      name: string;
      description: string;
      id: string;
}

const CreateIndex = () => {

  const [indexName, setIndexName] = useState("test");
  const [indexDescription, setIndexDescription] = useState("test");
  const [indexId, setIndexId] = React.useState('');
  const [indices, setIndices] = React.useState([{
                                                    id: "20b9eab9-4d6a-454d-81bc-236d0b460d68",
                                                    description: "Test2"
                                                  }]);
  const [indexText, setIndexText] = React.useState('');

  const classes = useStyles();

  const handleIndexNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
          console.log("Inside the handleIndexNameChange", indexName);
  		setIndexName(event.target.value);
  	};

  const handleIndexDescriptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  		console.log("Inside the handleIndexDescriptionChange", indexDescription);
  		setIndexDescription(event.target.value );
  	};

  const handleIndexChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  console.log("Inside the handleIndexChange", indexId);
        setIndexId(event.target.value);
  };

  const saveKendraIndex = () => {
    console.log("IndexName and IndexDescription ", indexName, indexDescription);
    kendraService
      .createKendraIndex({name: indexName,
                          description: indexDescription})
      .then((response) => {
           console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getQueryResults = () => {
      console.log("Inside the getQueryResults ");
      kendraService
        .getQueryResults("test","test")
        .then((response) => {
             console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  const fetchKendraIndices = async (): Promise<void> => {
  		const kendraIndices = await kendraService.getKendraIndices();
  		console.log("Inside the fetchKendraIndices", kendraIndices.data);
  		setIndices(kendraIndices.data);

       console.log("After inside the fetchKendraIndices", indices);
  };

    useEffect((): void => {
        fetchKendraIndices();
    }, []);

  const handleKendraIndexSelected = (id: string, description: string) => {
    console.log("Inside the kendraIndexSelected");
    setIndexId(description);
    setIndexText(id);
  }

  return (
  <Card style={{ padding: 20 }}>
  <CardContent>
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


      <Grid item xs={12} style={{ padding: 20 }}>
        <Footer />
      </Grid>
    </Grid>
    </CardContent>
    </Card>
  );
};

export default CreateIndex;
