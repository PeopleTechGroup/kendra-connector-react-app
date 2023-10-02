import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Card, CardContent} from "@material-ui/core";

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import PageNavigation from "../AppComponents/PageNavigation";
import kendraService from "../../services/KendraService";
import { useState, useEffect } from "react";

import Footer from "../AppComponents/Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





const KendraSearch= () =>{
const [index, setIndex] = React.useState('');
const [indexId, setIndexId] = React.useState('');
const [indexText, setIndexText] = React.useState('');
const [results, setResults] = React.useState();
const [query, setQuery] = React.useState('Enter your query here!');
const [indices, setIndices] = React.useState([{
                                                    id: "20b9eab9-4d6a-454d-81bc-236d0b460d68",
                                                    description: "Test2"
                                                  }]);

const handleChange = (event: SelectChangeEvent) => {
    setIndexText(event.target.value);
};

const handleDelete = () => {
    // Clear the text field when the delete button is clicked
    setQuery('');
    setResults('');
};

const handleSubmit = () => {
    setResults('Calculated results are shown here!');
}

const handleIndexChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setIndex(event.target.value);
  };

  const fetchKendraIndices = async (): Promise<void> => {
        const kendraIndices = await kendraService.getKendraIndices();
        setIndices(kendraIndices.data);
  };

  useEffect((): void => {
    fetchKendraIndices();
  }, []);

  const handleKendraIndexSelected = (id: string, description: string) => {
      setIndexId(id);
      setIndexText(description);

  }

  let rows2 = [];

  function createData(
    documentId: string,
    documentTitle: string,
    documentURI: string,
    id: number,
    type: string,
  ) {
    return { documentId, documentTitle, documentURI, id, type };
  }


  const getQueryResults = async (): Promise<void> => {
        const queryResults = await kendraService
          .getQueryResults(query,indexId)
        setResults(queryResults.data);

        queryResults.data.map((result) => {
            rows2.push(createData(result.documentId, result.documentTitle, result.documentURI, result.id, result.type));
            setResults(rows2);
        });
  };


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
                 title="Kendra Index Search"
                 breadcrumbs={[{ title: "Home", href: "/" }, { title: "Index Search" }]}
               />
         </Grid>

         <Grid container style={{ marginTop: "2%" }} spacing={2}>
                      <Grid item xs={12}>
                        <Item>
                            <Typography variant="h4" gutterBottom>
                                Search
                            </Typography>
                             <FormControl sx={{ m: 1, minWidth: 200 }}>
                                 <InputLabel id="demo-simple-select-label">Indexes</InputLabel>
                                     <Select
                                       multiple={false}
                                       value={indexText}
                                       labelId="demo-simple-select-label"
                                       id="demo-simple-select"
                                       label="Indexes"
                                       onChange={handleChange}
                                     >
                                     {indices.map((index) => (
                                         <MenuItem
                                             key={index.id}
                                             value={index.description}
                                             onClick={() => handleKendraIndexSelected(index.id, index.description)}
                                         >
                                             {index.description}
                                         </MenuItem>
                                        ))}

                                       <MenuItem value={10}>Index 1</MenuItem>
                                       <MenuItem value={20}>Index 2</MenuItem>
                                       <MenuItem value={30}>Index 3</MenuItem>
                                     </Select>
                             </FormControl>

                             <Paper
                                   component="form"
                                   sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                                 >
                                   <InputBase
                                     id="outlined-multiline-static"
                                     label="Query "
                                     placeholder="Enter your Query"
                                     multiline
                                     rows={4}
                                     fullWidth
                                     value={query}
                                     onChange={(e) => setQuery(e.target.value)}
                                   />
                                   <IconButton onClick={getQueryResults} type="button" sx={{ p: '10px' }} aria-label="search">
                                     <SearchIcon />
                                   </IconButton>
                                   <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                   <IconButton onClick={handleDelete} color="primary" sx={{ p: '10px' }} aria-label="delete">
                                     <DeleteIcon />
                                   </IconButton>
                                 </Paper>
                       </Item>
                      </Grid>
                  </Grid>
                 <Grid container style={{ marginTop: "2%" }} spacing={2}>
                      <Grid item xs={12}>
                        <Item>
                            <Typography variant="h4" gutterBottom>
                               Results
                            </Typography>
                            <Paper
                              component="form"
                              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                            >
                                <InputBase
                                      id="outlined-multiline-static"
                                      label="Query Results"
                                      placeholder="Query Results"
                                      multiline
                                      rows={4}
                                      fullWidth
                                      InputProps={{
                                          readOnly: true, // Make the input read-only
                                          style: { overflowY: 'scroll' }, // Add a scroll bar when content exceeds 4 rows
                                      }}
                                      value={JSON.stringify(results)}

                                />
                            </Paper>
                        </Item>
                      </Grid>
                 </Grid>
             <div>
                  <Grid item xs={12} sm={6} md={4} lg={4} style={{ marginTop: "2%" }} spacing={4}>
                     <Footer/>
                  </Grid>
              </div>

         </Grid>
     </CardContent>
 </Card>



  );
}


export default KendraSearch;