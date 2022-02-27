import { useState, useEffect } from "react";
import RestaurantBackground from "../media/RestaurantBackground.jpg";
import RestaurantLogo from '../media/logo.png'
import { Container, LoginContainer } from "../components/Login/Login.elements";
import { Button } from "../globalStyles"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from 'framer-motion';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import LoginStyling from '../components/Login/LoginStyling.css';
import { loginErrorAlert } from "../components/Alerts";
import { types } from "../types/types";
import Spinner from "../components/Spinner";
import { loginSuccessAlert } from "../components/Alerts";

const Login = () => {
   const [isLoading, setIsLoading] = useState();
   let navigate = useNavigate();
   const dispatch = useDispatch();

   const storedToken = localStorage.getItem('token');

   useEffect(() => {
      if (storedToken) {
         navigate('/home');
      }
   });

   const handleSubmitForm = (token) => {
      const action = {
         type: types.signin,
         payload: token,
      }
      dispatch(action)
      console.log("Success! Logged in correctly.")
      loginSuccessAlert();
      setIsLoading(false);
      navigate('/home');
   }

   return (
      <>
         <Container
            style={{
               backgroundImage: `url(${RestaurantBackground})`,
            }}
         >
            <motion.div initial={{ y: "3%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
               <LoginContainer>
                  <img src={RestaurantLogo} alt="logo" width="50px" height="57px" style={{ paddingBottom: "30px" }} />
                  <Formik
                     initialValues={{
                        email: '',
                        password: ''
                     }}
                     validationSchema={
                        yup.object({
                           email: yup.string()
                              .email('Invalid email address')
                              .required('This field is required')
                              .oneOf(['challenge@alkemy.org'], 'Invalid email'),
                           password: yup.string()
                              .required('This field is required')
                              .oneOf(['react'], 'Invalid password')
                        })
                     }
                     onSubmit={(values, { resetForm }) => {
                        setIsLoading(true)
                        axios.post(`http://challenge-react.alkemy.org/`, {
                           email: 'challenge@alkemy.org',
                           password: 'react'
                        })
                           .then(res => {
                              const token = res.data.token
                              handleSubmitForm(token)
                           }).catch(error => {
                              console.log('ERROR:' + error)
                              loginErrorAlert(error);
                           })
                        resetForm();
                     }}
                  >
                     {({ errors, touched }) => (
                        <Form className='contact-form' >
                           <label htmlFor="email" style={{ fontFamily: "Poppins", marginTop: "20px", fontWeight: "500", color: "white" }}>Email</label>
                           <Field
                              type="email"
                              name='email'
                              id="email"
                              placeholder="challenge@alkemy.org"
                              style={{ marginBottom: "30px" }} />

                           {errors.email && touched.email ? (
                              <h4 style={{ marginTop: "-25px", color: "#d3c0ee", fontWeight: "400" }}>Please enter a valid email.</h4>
                           ) : null}

                           <label htmlFor="password" style={{ fontFamily: "Poppins", fontWeight: "500", color: "white" }}>Password</label>
                           <Field
                              type="password"
                              name='password'
                              id="password"
                              placeholder="react"
                           />

                           {errors.password && touched.password ? (
                              <h4 style={{ margin: "5px", color: "#d3c0ee", fontWeight: "400" }}>Please enter a valid password.</h4>
                           ) : null}

                           <Button type="submit" disabled={isLoading}>Sign In</Button>
                        </Form>
                     )}
                  </Formik>
                  {isLoading ? (<Spinner Small />) : null}
               </LoginContainer>
            </motion.div>
         </Container>
      </>
   );
};

export default Login;


