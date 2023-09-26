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

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import Footer from "./Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const KendraSearch= () =>{
const [index, setIndex] = React.useState('');
const [results, setResults] = React.useState('');
const [query, setQuery] = React.useState('Enter your query here!');

const handleChange = (event: SelectChangeEvent) => {
    setIndex(event.target.value);
};

const handleDelete = () => {
    // Clear the text field when the delete button is clicked
    setQuery('');
    setResults('');
};

const handleSubmit = () => {
    setResults('Calculated results are shown here!');
}

 return (
 <Box sx={{ width: '100%' }}>
           <Grid container style={{ marginTop: "2%" }} spacing={2}>
             <Grid item xs={12}>
               <Item>
                   <Typography variant="h4" gutterBottom>
                       Kendra Index Search
                   </Typography>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-label">Indexes</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={index}
                              label="Indexes"
                              onChange={handleChange}
                            >
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
                          <IconButton onClick={handleSubmit} type="button" sx={{ p: '10px' }} aria-label="search">
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
                      Kendra Index Query Results
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
                             value={results}
                             onChange={(e) => setResults(e.target.value)}
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
 </Box>

  );
}


export default KendraSearch;