
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
import { resetError, resetFileUpload, resetSuccess, setFileUpload } from './store/uiActions.ts';
import FileUpload from './components/fileUpload.tsx';
import MessageBox from './components/messageBox.tsx';
import Loading from './components/loading.tsx';
import Logout from './pages/logout.tsx';

function App(props: any) {

  return (
    <>
  

    <BrowserRouter>

      {
        (props.ui.loading || props.ui.showFUSection || props.ui.error.isError || props.ui.success.isSuccess) && <Modal />
      }

      {
        props.ui.showFUSection && <FileUpload closeSection={props.onResetFU} />
      }

      {
        props.ui.loading  
        && 
        <div className='z-[500] bg-white p-6 fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
          <Loading />
        </div>
      }

      {
        (props.ui.error.isError) 
        && 
        <MessageBox 
        message={props.ui.error.errorMessage} 
        redirect={props.ui.error.redirect} 
        removeMessageBox={props.onResetError}
        />
      }

      {
        (props.ui.success.isSuccess) 
        && 
        <MessageBox 
        message={props.ui.success.successMessage} 
        redirect={props.ui.success.redirect} 
        removeMessageBox={props.onResetSuccess}
        />
      }

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

        <Route path='/logout' element={
          <Logout />
        } />

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

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSetFU: () => dispatch(setFileUpload()),
    onResetFU: () => dispatch(resetFileUpload()),
    onResetError: () => dispatch(resetError()),
    onResetSuccess: () => dispatch(resetSuccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
