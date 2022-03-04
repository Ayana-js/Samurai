import React from "react";
import { Formik } from "formik";
import * as yup from 'yup'
import styles from './Login.module.css'
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
  <div>
      <Field placeholder={"Login"} name={"login"} component={"input"} />
  </div>
  <div>
      <Field placeholder={"Password"} name={"password"} component={"input"} />
  </div>
  <div>
      <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> Remember me
  </div>
  <div>
    <button>Login</button>
  </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm) 

const Login = (props) => {
   const onSubmit = (formData) => {
     props.login(formData)
   } 

   return <div>
     <h1> Login </h1>
     <LoginReduxForm onSubmit={onSubmit}/>
   </div>
}

export default Login

// const LoginFormik = (props) => {
//     const validationSchema = yup.object().shape({
//         name: yup.string().typeError('Name should be a string').required('Mandatory'),
//         secondname: yup.string().typeError('Name should be a string').required('Mandatory'),
//         password: yup.string().typeError('Name should be a string').required('Mandatory'),
//         confirmPassWord: yup.string().oneOf([yup.ref('password')], 'Passwords are different').required('Mandatory'),
//         email: yup.string().email('Enter a valid email').required('Mandatory'),
//         confirmEmail:  yup.string().email('Enter a valid email').oneOf([yup.ref('email')], 'Emails are different').required('Mandatory')
//       })
      
//       return (
//         <div className={styles.wrapper}>        
//           <Formik 
//             initialValues = {{
//               name: '',
//               secondname: '',
//               password: '',
//               confirmPassWord: '',
//               email: '',
//               confirmEmail: ''
//             }}
//             validateOnBlur
//             onSubmit={(values) => {console.log(values)}}
//             validationSchema={validationSchema}
//             >
//             {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
//               <div>
//                 <p>
//                   <label htmlFor='name'>Name</label> <br/>
//                   <input
//                   className={styles.input}
//                   name={'name'}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.name}
//                   />
//                 </p>
//                 {touched.name && errors.name && <p className={styles.error}> {errors.name} </p>}
//                 <p>
//                   <label htmlFor='email'>Email</label> <br/>
//                   <input
//                   className={styles.input}
//                   type={'email'}
//                   name={'email'}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.email}
//                   />
//                 </p>
//                 {touched.email && errors.email && <p className={styles.error}> {errors.email} </p>}
//                 <p>
//                   <label htmlFor='confirmEmail'> Confirm email</label> <br/>
//                   <input
//                   className='input'
//                   type={'confirmEmail'}
//                   name={'confirmEmail'}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.confirmEmail}
//                   />
//                 </p>
//                 {touched.confirmEmail && errors.confirmEmail && <p className={styles.error}> {errors.confirmEmail} </p>}
//                 <p>
//                   <label htmlFor='password'>Password</label> <br/>
//                   <input
//                   className={styles.input}
//                   type={'password'}
//                   name={'password'}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                   />
//                 </p>
//                 {touched.password && errors.password && <p className={styles.error}> {errors.password} </p>}
//                 <p>
//                   <label htmlFor='confirmPassWord'> Confirm password</label> <br/>
//                   <input
//                   className={styles.input}
//                   type={'password'}
//                   name={'confirmPassWord'}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.confirmPassWord}
//                   />
//                 </p>
//                 {touched.confirmPassWord && errors.confirmPassWord && <p className={styles.error}> {errors.confirmPassWord} </p>}
//                 <input type={'checkbox'} /> Remember me
//                 <div>
//                 <button
//                 className={styles.button}
//                 disabled={!isValid && !dirty}
//                 onClick={handleSubmit}
//                 type={'submit'}
//                 > Submit </button>
//                 </div>
//               </div>
//             )}
//           </Formik>
//         </div>
//       );
// }

