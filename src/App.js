import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import AddUser from './pages/AddUser';
import DisplayFields from './pages/DisplayFields';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/"element={<Layout />}>
                    <Route index element={<AddUser />}/>
                    <Route path='/displayfields' element={
                        <ProtectedRoute>
                            <DisplayFields />
                        </ProtectedRoute>
                    }/>
                    
                </Route>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
