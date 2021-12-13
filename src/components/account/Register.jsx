import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '../_services';

export const Register = () => {
  let navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('נדרש שם פרטי.'),
    lastName: Yup.string()
      .required('נדרש שם משפחה.'),
    username: Yup.string()
      .required('נדרש שם משתמש.'),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "סיסמה חייבת להכיל 8 תווים לפחות, אות אחת גדולה, אות קטנה אחת, מספר אחד ותו אות מיוחד אחד."
      )
      .email('דוא"ל לא תקין.')
      .required('יש צורך בדוא"ל.'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "סיסמה חייבת להכיל 8 תווים לפחות, אות אחת גדולה, אות קטנה אחת, מספר אחד ותו אות מיוחד אחד."
      )
      .required('דרוש סיסמא.'),
  });

  function onSubmit(fields, { setStatus, setSubmitting }) {
    setStatus();
    accountService.register(fields)
      .then(() => {
        alertService.success(' ההרשמה הצליחה, אנא בדוק את הדוא"ל שלך לקבלת הוראות אימות.', { keepAfterRouteChange: true });
        navigate('/account/login');
      })
      .catch(error => {
        setSubmitting(false);
        alertService.error(error);
      });
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <h3 className="card-header">צור חשבון חדש</h3>
          <h6 className="card-header">זה מהיר וקל.</h6>
          <div className="card-body">
            <div className="form-row row mb-3">
              <div className="form-group col-6">
                <Field name="firstName" type="text" placeholder="שם פרטי" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group col-6">
                <Field name="lastName" type="text" placeholder="שם משפחה" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
              </div>
            </div>
            <div className="form-group mb-3">
              <Field name="username" type="text" placeholder="שם משתמש" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
              <ErrorMessage name="username" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group mb-3">
              <Field name="email" type="text" placeholder="דוא&quot;ל" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group mb-3">
              <div className="form-group col">
                <Field name="password" type="password" placeholder="סיסמה חדשה" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>
            </div>
            <div className="form-group mb-3">
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                הרשמה
              </button>
              <Link to="/account/login" className="btn btn-link">כבר יש לך חשבון?</Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}