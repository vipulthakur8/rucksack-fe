
import { Route, Routes } from 'react-router-dom';
// import Header from './components/header.tsx';
import Home from './pages/home.tsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/login' element={
        <p>
          Hello from login
        </p>
        } />

        <Route path='/signup' element={
          <p>Hello from Sign up</p>
        }/>

      </Routes>    
    </>
  )
}

export default App
