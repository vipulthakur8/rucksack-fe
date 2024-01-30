
import { BrowserRouter , Route, Routes } from 'react-router-dom';
// import Header from './components/header.tsx';
import Home from './pages/home.tsx';
import Login from './pages/login.tsx';
import Signup from './pages/signup.tsx';
import ProtectedRoute from './components/protectedRoute.tsx';
import Dashboard from './pages/dashboard.tsx';
import DbHome from './pages/dbHome.tsx';

import Modal from './components/modal.tsx';

import { connect } from 'react-redux';
import { resetFileUpload, setFileUpload } from './store/uiActions.ts';
import FileUpload from './components/fileUpload.tsx';

function App(props: any) {

  return (
    <>
    {
      props.ui.showFUSection && <Modal />
    }

    {
      props.ui.showFUSection && <FileUpload closeSection={props.onResetFU} />
    }

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/login' element={
          <Login />
        } />

        <Route path='/signup' element={
          <Signup />
        }/>

        <Route element={<ProtectedRoute toll={true} redirectTo={'/'} />}>
          <Route path='/dashboard' element={<Dashboard />} >
            <Route index element={<DbHome />} />
          </Route>
        </Route>

        <Route path='*' element={<Home />} />

      </Routes>    
    </BrowserRouter>
    </>
  )
}

const mapStateToProps = (state:any) => {
  return {
    ui: state.ui
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    onSetFU: () => dispatch(setFileUpload()),
    onResetFU: () => dispatch(resetFileUpload())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
