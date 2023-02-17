import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import AddUser from './pages/AddUser';
import DisplayFields from './pages/DisplayFields';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/"element={<Layout />}>
                    <Route index element={<AddUser />}/>
                    <Route path='/displayfields' element={<DisplayFields />}/>
                </Route>
            </Routes>
      </BrowserRouter>
        <div>
        <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                error
                id="outlined-error"
                label="Error"
                defaultValue="Hello World"
              />
              <TextField
                error
                id="outlined-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
              />
            </div>
            <div>
              <TextField
                error
                id="filled-error"
                label="Error"
                defaultValue="Hello World"
                variant="filled"
              />
              <TextField
                error
                id="filled-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="filled"
              />
            </div>
            <div>
              <TextField
                error
                id="standard-error"
                label="Error"
                defaultValue="Hello World"
                variant="standard"
              />
              <TextField
                error
                id="standard-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="standard"
              />
            </div>
        </Box>
        </div>
    </>
  );
}

export default App;
