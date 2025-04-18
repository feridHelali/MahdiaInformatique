import "./ProductList.css";
import { useProductData } from "../../../hooks/useProductdata";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../Alert/AlertContext";
import { AlertActions } from "../../Alert/alert.actions";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import getPhotoUrl from "../../../utilities/getPhotoUrl";
import { TableFooter } from "@mui/material";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function ProductList() {
  const {
    products,
    page,
    setPage,
    limit,
    setLimit,
    query,
    setQuery,
    pagination,
    removeProduct,
  } = useProductData();
  const navigate = useNavigate();
  const [_, dispatch] = useAlert();

  console.log(limit,page,query,)

  async function handleRemoveProduct(id) {
    const result = await removeProduct(id);
    if (result.status) {
      dispatch(AlertActions.showInfoAlert(result.message));
    } else {
      dispatch(AlertActions.showErrorAlert(result.message));
    }
  }

  return (
    <div className="productlist">
      <div className="productlist__head">
        <h1>Product List</h1>
        <input 
        placeholder="Search" 
        value={query}
        onChange={e=>setQuery(e.target.value)}
        />
        <AddToPhotosIcon onClick={() => navigate("/product/add")} />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Label</StyledTableCell>
              <StyledTableCell align="right">Brand</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Cover</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Remove</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <StyledTableRow key={product._id}>
                <StyledTableCell component="th" scope="row">
                  {product.label}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {product.brand}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {product.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <img
                    src={getPhotoUrl(product.cover_url)}
                    alt="product"
                    style={{ width: "100px" }}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  {product.price}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <AssignmentIcon
                    onClick={() => navigate(`/product/update/${product._id}`)}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <DisabledByDefaultIcon
                    onClick={() => handleRemoveProduct(product._id)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
        <Stack spacing={2}>
          <Pagination 
          count={Math.floor(products.length/limit)+1} page={page} 
          variant="outlined" shape="rounded" 
          showLastButton={!pagination?.next}
          showFirstButton={!pagination?.previous}
          onChange={(e,page)=>{
           setPage(page)
          }}
          />
        </Stack>
      </TableContainer>
    </div>
  );
}

export default ProductList;


