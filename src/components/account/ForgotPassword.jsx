import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '../_services';

export const ForgotPassword = () => {
  const initialValues = {
    email: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('דוא"ל לא תקין.')
      .required('יש צורך בדוא"ל.')
  });

  function onSubmit({ email }, { setSubmitting }) {
    alertService.clear();
    accountService.forgotPassword(email)
      .then(() => alertService.success('אנא בדוק את הדוא"ל שלך לקבלת הוראות לאיפוס סיסמה.'))
      .catch(error => alertService.error(error))
      .finally(() => setSubmitting(false));
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <h3 className="card-header">שכחתי סיסמא</h3>
          <div className="card-body">
            <div className="form-group">
              <Field name="email" type="text" placeholder="דוא&quot;ל" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-row">
              <div className="form-group col">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                  {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                  אישור
                </button>
                <Link to="/account/login" className="btn btn-link">ביטול</Link>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}