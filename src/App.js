import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import AddUser from './pages/AddUser';
import DisplayFields from './pages/DisplayFields';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/"element={<Layout />}>
                  <Route index element={<AddUser />}/>
                  <Route path='/displayfields' element={<DisplayFields />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
