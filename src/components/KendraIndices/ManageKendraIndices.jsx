import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import kendraService from "../../services/KendraService";
import React, { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';


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

function createData(
  sno: string,
  indexName: string,
  indexDescription: string,
  indexId: number,
  createdBy: string,
) {
  return { sno, indexName, indexDescription, indexId, createdBy };
}

let rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];
let rows2 = [];

const ManageKendraIndices = () => {
  const classes = useStyles();

   const [indices, setIndices] = React.useState([{
                                                      id: "20b9eab9-4d6a-454d-81bc-236d0b460d68",
                                                      description: "Test2"
                                                    }]);
   const [tableRows, setTableRows] = React.useState(rows2);


  const fetchKendraIndices = async (): Promise<void> => {
    		const kendraIndices = await kendraService.getKendraIndices();
    		setIndices(kendraIndices.data);
    		rows2 = [];
    		let i = 0;
    		kendraIndices.data.map((index) => {
    		i = i+1;


    		    rows2.push(createData(Number(i),index.description,"Test Description" + Number(i+1) ,index.id,'Abhilash Kosaraju'));
    		    setTableRows(rows2);

    		})
    };

  useEffect((): void => {
    fetchKendraIndices();
  }, []);


  const handleDelete = (postIndex) => {
  let updatedRows = [];
  tableRows.filter((row) => {
        updatedRows.push(row.sno != postIndex);
  });
  setTableRows(updatedRows);
  };




  return (
    <Grid container xs={12} spacing={5}>
      <Grid item xs={12}>
        <PageNavigation
          title="Manage Kendra Indices"
          breadcrumbs={[{ title: "Home", href: "/" }, { title: "Manage Indices" }]}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" component="h3">
          <strong> Available Indices </strong>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Serial No</strong></TableCell>
                    <TableCell align="right"><strong>Index Name</strong></TableCell>
                    <TableCell align="right"><strong>Index Description</strong></TableCell>
                    <TableCell align="right"><strong>Index Id</strong></TableCell>
                    <TableCell align="right"><strong>Created By</strong></TableCell>
                    <TableCell align="right"><strong>Actions</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableRows.map((row) => (
                    <TableRow
                      key={row.indexId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.sno}
                      </TableCell>
                      <TableCell align="right">{row.indexName}</TableCell>
                      <TableCell align="right">{row.indexDescription}</TableCell>
                      <TableCell align="right">{row.indexId}</TableCell>
                      <TableCell align="right">{row.createdBy}</TableCell>
                      <TableCell align="right">
                      <IconButton onClick={() => handleDelete(row.indexId)} color="primary" sx={{ p: '10px' }} aria-label="delete">
                                                  <DeleteIcon />
                      </IconButton>
                       <IconButton onClick={handleDelete} color="primary" sx={{ p: '10px' }} aria-label="delete">
                        <EditIcon />
                      </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
      </Grid>
    </Grid>
  );
};

export default ManageKendraIndices;
