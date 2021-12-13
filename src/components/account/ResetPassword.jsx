import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '../_services';

export const ResetPassword = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const TokenStatus = {
    Validating: 'Validating',
    Valid: 'Valid',
    Invalid: 'Invalid'
  }

  const [token, setToken] = useState(null);
  const [tokenStatus, setTokenStatus] = useState(TokenStatus.Validating);

  useEffect(() => {
    const { token } = queryString.parse(location.search);

    // remove token from url to prevent http referer leakage
    navigate(location.pathname, { replace: true })

    accountService.validateResetToken(token)
      .then(() => {
        setToken(token);
        setTokenStatus(TokenStatus.Valid);
      })
      .catch(() => {
        setTokenStatus(TokenStatus.Invalid);
      });
  }, []);

  function getForm() {
    const initialValues = {
      password: '',
      confirmPassword: ''
    };

    const validationSchema = Yup.object().shape({
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          "סיסמה חייבת להכיל 8 תווים לפחות, אות אחת גדולה, אות קטנה אחת, מספר אחד ותו אות מיוחד אחד."
        )
        .required('דרושה סיסמא.'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'הסיסמאות חייבות להיות זהות.')
        .required('דרוש אימות סיסמה.'),
    });

    function onSubmit({ password }, { setSubmitting }) {
      alertService.clear();
      accountService.resetPassword({ token, password })
        .then(() => {
          alertService.success('איפוס הסיסמה הצליח, כעת אתה יכול להתחבר.', { keepAfterRouteChange: true });
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
            <div className="form-group">
              <label>סיסמה</label>
              <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label>אימות סיסמה</label>
              <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
              <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
            </div>
            <div className="form-row">
              <div className="form-group col">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                  {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                  אפס סיסמה
                </button>
                <Link to="/account/login" className="btn btn-link">ביטול</Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }

  function getBody() {
    switch (tokenStatus) {
      case TokenStatus.Valid:
        return getForm();
      case TokenStatus.Invalid:
        return <div>אימות האסימון נכשל, אם האסימון פג אתה יכול לקבל אחד חדש ב- <Link to="/account/forgot-password">שכחת את סיסמא?</Link></div>;
      case TokenStatus.Validating:
        return <div>מאמת אסימון...</div>;
      default:
        break;
    }
  }

  return (
    <div>
      <h3 className="card-header">איפוס סיסמה</h3>
      <div className="card-body">{getBody()}</div>
    </div>
  )
}