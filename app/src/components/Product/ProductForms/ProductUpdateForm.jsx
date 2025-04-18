
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useEffect, useRef } from 'react';
import { useAlert } from '../../Alert/AlertContext'
import { AlertActions } from '../../Alert/alert.actions';
import { useNavigate, useParams } from 'react-router-dom';
import FileUpload from '../../FileUpload';
import { useProductData } from '../../../hooks/useProductdata';



function ProductUpdateForm() {
  const { id } = useParams()
  let label = useRef()
  let brand = useRef()
  let description = useRef()
  let price = useRef()
  const {getProductById, updateProduct} = useProductData();
  const [_, dispatch] = useAlert()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await updateProduct(
      id,
      label.current.value,
      brand.current.value,
      description.current.value,
      price.current.value)
    console.log(result)

    if (result.status) {
      dispatch(AlertActions.showInfoAlert(result?.message))
      navigate('/products')
    } else {
      dispatch(AlertActions.showErrorAlert(result?.message?.error))
    }
  }

  useEffect(() => {
    const getProduct = async () => {
      const { message, status, payload } = await getProductById(id)
      label.current.value = payload.label
      brand.current.value = payload.brand
      description.current.value = payload.description
      price.current.value = payload.price
    }
    getProduct(id)

  }, [id, getProductById])

  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
         Update Product Form
        </Typography>
        <Box  sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap:3
        }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            inputRef={label}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="text"
            inputRef={brand}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            type="text"
            inputRef={description}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            type="number"
            inputRef={price}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>

        </Box>
        <Box>
          <FileUpload id={id} />
        </Box>
        </Box>
      </Box>
    </Container >
  )
}

export default ProductUpdateForm

