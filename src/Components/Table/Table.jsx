import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(
  name,
  trackingId,
  date,
  status,
) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Frozen yoghurt', 159, "4 april 2024" , "Approved"),
  createData('Ice cream sandwich', 237, "4 april 2024" , "Pending"),
  createData('Eclair', 262, "4 april 2024" , "Approved"),
  createData('Cupcake', 305, "4 april 2024" , "Delivered"),
];


function makeStyles(status)
{
    if(status==='Approved')
    {
        return{
            background:'rgb(145 254 159 / 47%)',
            color:'green'
        }
    }else if(status==='Pending')
    {
        return{
            background:'#ffadad8f',
            color:'red'
        }
    }else
    {
        return{
            background:'#59bfff',
            color:'white'
        }
    }

}
export default function BasicTable() {
    
  return (
    <div className="Table">
        <h3>Recent Orders</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.status)}>{row.status}</span>
                </TableCell>
              <TableCell align="left" className='Details'>detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
