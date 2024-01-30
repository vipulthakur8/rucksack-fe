
import { BrowserRouter , Route, Routes } from 'react-router-dom';
// import Header from './components/header.tsx';
import Home from './pages/home.tsx';
import Login from './pages/login.tsx';
import Signup from './pages/signup.tsx';
import ProtectedRoute from './components/protectedRoute.tsx';
import Dashboard from './pages/dashboard.tsx';

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

        <Route path='/dashboard' element={<ProtectedRoute toll={true} redirectTo={'/'} />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path='*' element={<Home />} />

      </Routes>    
    </BrowserRouter>
  )
}

export default App
