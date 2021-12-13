import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { accountService, alertService } from '../_services';

export const Login = () => {
  let navigate = useNavigate();

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('יש צורך בדוא"ל או שם משתמש.'),
    password: Yup.string().required('יש צורך בסיסמא.')
  });

  function onSubmit({ email, password }, { setSubmitting }) {
    alertService.clear();
    accountService.login(email, password)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        setSubmitting(false);
        alertService.error(error);
      });
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} style={{ diection: "rtl" }}>
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <h3 className="card-header">התחבר/י לפ.ל.ת</h3>
          <div className="card-body">
            <div className="form-group mb-3">
              <Field name="email" type="text" placeholder="דוא&quot;ל" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <Field name="password" type="password" placeholder="סיסמה" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group col text-right mb-3" style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link to="/account/forgot-password" className="btn btn-link pr-0">שכחת את סיסמא?</Link>
            </div>
            <div className="form-row mb-3">
              <div className="form-group col">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                  {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                  התחבר/י
                </button>
                <Link to="/account/register" className="btn btn-link">יצירת חשבון חדש</Link>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}