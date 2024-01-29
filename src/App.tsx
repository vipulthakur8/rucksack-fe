
import { BrowserRouter , Route, Routes } from 'react-router-dom';
// import Header from './components/header.tsx';
import Home from './pages/home.tsx';
import Login from './pages/login.tsx';
import Signup from './pages/signup.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/login' element={
          <Login />
        } />

        <Route path='/signup' element={
          <Signup />
        }/>

      </Routes>    
    </BrowserRouter>
  )
}

export default App
