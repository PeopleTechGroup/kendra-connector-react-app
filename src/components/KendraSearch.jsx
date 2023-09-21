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
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
// or
// import { IconButton } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Footer from "./Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const output = (
    <p>This is the output.</p>
  );
const KendraSearch= () =>{
const [index, setIndex] = React.useState('');
const handleChange = (event: SelectChangeEvent) => {
    setIndex(event.target.value);
};

 return (
 <Box sx={{ width: '100%' }}>
     <div >
           <Grid container direction="column" alignItems="center" style={{ marginTop: "2%" }} spacing={4}>
             <Grid xs={6}>
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
                    <div sx={{ m: 1, minWidth: 500 }} >
                        <TextField
                                  id="outlined-multiline-static"
                                  label="Query"
                                  placeholder="Placeholder"
                                  multiline
                                  rows={4}
                                  defaultValue="Enter your query here!"
                                />
                                <Button onClick={handleChange} startIcon={<DeleteIcon />}></Button>
                                <Stack direction="row" spacing={4} justifyContent="right">
                                      <Button onClick={handleChange} endIcon={<SendIcon />}></Button>
                                </Stack>
                    </div>
              </Item>
             </Grid>
         </Grid>
    </div>
    <div>
        <Grid container direction="column" alignItems="center" style={{ marginTop: "2%" }} spacing={4}>
             <Grid xs={6}>
               <Item>
                   <Typography variant="h4" gutterBottom>
                      Kendra Index Query Results
                   </Typography>
                   <div sx={{ m: 1, minWidth: 500 }} >
                       <TextField
                                 id="outlined-multiline-static"
                                 label="Query Results"
                                 placeholder="Placeholder"
                                 multiline
                                 rows={4}
                                 overflow="scroll"
                               />
{/*                            <Button onClick={handleChange} startIcon={<DeleteIcon />}> */}
{/*                            </Button> */}
                   </div>
               </Item>
             </Grid>
        </Grid>
    </div>
    <div>
     <Grid item xs={12} sm={6} md={4} lg={4} style={{ marginTop: "2%" }} spacing={4}>
                 <Footer/>
                </Grid>
     </div>
 </Box>

  );
}


export default KendraSearch;