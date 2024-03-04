
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import {motion} from 'framer-motion';
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
        (props.ui.error.isError || props.ui.success.isSuccess) && <Modal />
      }

      {
        props.ui.showFUSection 
        && 
        <div className='fixed z-[380] w-full h-full bg-modal'>
        <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 200, opacity: 0 }} 
        transition={{ duration: 0.5 }} 
        className='absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-[400]'
        >
          <FileUpload closeSection={props.onResetFU} />
        </motion.div>
        </div>
        // <FileUpload closeSection={props.onResetFU} />

      }

      {
        props.ui.loading  
        && 
        <div className='bg-modal z-[400] fixed w-full h-full'>
           <div className='z-[500] bg-white p-10 fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
              <Loading />
            </div>
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
