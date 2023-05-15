import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UserListing from './Component/UserListing';
import AddUser from './Component/AddUser';
import UpdateUser from './Component/UpdateUser';
import Home from './Component/Home';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
      <div className='header d-flex justify-content-between'>
        <Link to={'/'}>Home</Link>
        <Link to={'/user'}>Users</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user' element={<UserListing></UserListing>}></Route>
        <Route path='/user/add' element={<AddUser></AddUser>}></Route>
        <Route path='/user/edit/:code' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position"
      position="bottom-right"></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
