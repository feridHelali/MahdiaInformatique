
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useAlert } from '../../Alert/AlertContext'
import { AlertActions } from '../../Alert/alert.actions';
import { useNavigate } from 'react-router-dom';

import { useProductData } from '../../../hooks/useProductdata';



function ProductAddForm() {
  //Controlled Forms
  const [label,setLabel]=useState('')
  const [brand,setBrand]=useState('')
  const [description,setDescription]=useState('')
  const [price,setPrice]=useState(0)
  const {addNewProduct} =useProductData()
  const [_,dispatch]= useAlert()
  const navigate=useNavigate()

  const [labelError,setLabelError]=useState('')


  const handleSubmit =async function (e) {
     e.preventDefault()
    const result = await addNewProduct(label,brand,description,price)
    if(result.status){
      dispatch(AlertActions.showInfoAlert(result.message))
      navigate('/products')
    }else{
      dispatch(AlertActions.showErrorAlert(result.message))
    }
    console.log(result)
  }

  return (
    <Container component="main" maxWidth="xs">
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
          Add Product
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="label"
            label="Label"
            name="label"
            autoComplete="label"
            autoFocus
            value={label}
            onChange={(e)=>{
              let _label=e.target.value;
              if( _label?.length <10 || _label.length>50 ){
                setLabelError('Invalid Label Please retype max:50 min:10')
              }else{
                setLabelError('')
              }
              setLabel(e.target.value)}
            }
          />
          <h3 style={{color:"red"}}>{labelError ? labelError:null}</h3>
          <TextField
            margin="normal"
            required
            fullWidth
            name="brand"
            label="Brand"
            type="text"
            id="brand"
            autoComplete="brand"
            value={brand}
            onChange={(e)=>setBrand(e.target.value)}
          />

          <TextField 
            name="description"
            minRows={3}
            aria-label="description" 
            placeholder="Description" 
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="price"
            label="price"
            type="number"
            id="price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            />
           
            <Button
              type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
            >
          Save
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={(e)=>{
            e.preventDefault()
            setLabel('')
            setBrand('')
            setDescription('')
            setPrice(0)
          }}
       
        >
          Cancel
        </Button>
      </Box>
    </Box>
      </Container >
  );
}

export default ProductAddForm;
