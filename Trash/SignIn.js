import React from 'react'
import FormSignUp from './FormSignUp';
import '@fontsource/roboto';
import { Route, Routes } from 'react-router-dom';
import { Link } from '@material-ui/icons';



const SignIn = () => {

    return (
        <>
            <FormSignUp />

            {/* <Link to='/SignIn' >HANI A H A M I D !!!!!</Link>
            <Routes>
                <Route path="/SignIn" element={<FormSignIn />} />
            </Routes> */}
        </>
    )
}




export default SignIn
