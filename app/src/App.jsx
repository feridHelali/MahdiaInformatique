
import { useEffect, useState } from 'react'
import './App.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      fetch("http://localhost:3000/api/v1/products/all")
        .then(response => response.json())
        .then(json => setProducts(json.products))
        .catch(error => console.error(error.message))
    }

    getProducts()

  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">id</StyledTableCell>
              <StyledTableCell align="right">Label&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">brand&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Description&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Price&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row._id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.label}</StyledTableCell>
                <StyledTableCell align="right">{row.brand}</StyledTableCell>
                <StyledTableCell align="right">{row.description}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default App
