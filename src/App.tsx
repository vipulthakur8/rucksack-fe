
import { Route, Routes } from 'react-router-dom';
// import Header from './components/header.tsx';
import Home from './pages/home.tsx';
import Login from './pages/login.tsx';
import Signup from './pages/signup.tsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/login' element={
          <Login />
        } />

        <Route path='/signup' element={
          <Signup />
        }/>

      </Routes>    
    </>
  )
}

export default App
