import React, { useState, useEffect } from 'react'
import ProductList from './ProductList';
import {useSignOut} from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'



export default function Home() {

  const signOut = useSignOut();
  const navigate = useNavigate();

  // const logout = () => {
  //   signOut();
  //   navigate('/login');
  // }

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [id, setId] = useState(0)
  const [fruit, setFruit] = useState([]);
  const [date, setDate] = useState(new Date)

  useEffect(()=>{
    setInterval(()=>{setDate(new Date)},1000)
  },[])


  const hrs = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  

  const updateFruit = () => {
    setId(id + 1)
    setFruit([...fruit,{id: id, name: name, quantity: quantity, time: hrs}])
    setName('')
    setQuantity('')
    
  }

  const deleteById  = delId => {
    setFruit(fruit.filter(f => f.id !== delId)
    )
  }

  return (
    <React.Fragment>
      <h1 style={{textAlign:'center', margin:'20px 0'}}>Fruit Inventory</h1>
      <Grid container spacing={2}>
        <Grid xs={12} display='flex' justifyContent='center'>
          <TextField size='small' value={name} label='name' onChange={(e)=>setName(e.target.value)}/>
        </Grid>
        <Grid xs={12} display='flex' justifyContent='center'>
          <TextField size='small' value={quantity} label='quantity' type='number' onChange={(e)=>setQuantity(e.target.value)}/>
        </Grid>
        <Grid xs={12} display='flex' justifyContent='center'>
          <Button variant='contained' sx={{width:'200px'}} onClick={updateFruit}>Add</Button>
        </Grid>
      </Grid>

      <TableContainer sx={{marginTop: '20px'}} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fruit.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell><Button variant='contained' onClick={() => deleteById(row.id)}>delete</Button></TableCell>
              </TableRow>
            )

            )

            }
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Grid container spacing={2}>
        <Grid container xs={12} display='flex' justifyContent='center' alignItems='center'>
          <Grid display='flex' alignItems='center' spacing={2}>
            <TextField variant='outlined' size='small' placeholder='search...' style={{border: ''}}/>
          </Grid>
        </Grid>
        <Grid xs display='flex' justifyContent='end' alignItems='center'>
          <Grid>
            <Button variant='contained' size='small'>Account</Button>
          </Grid>
        </Grid>
      </Grid> */}
    </React.Fragment>
  )
}
