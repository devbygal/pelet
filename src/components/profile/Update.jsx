import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '../_services';

function Update() {
    const user = accountService.userValue;
    const initialValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: '',
    };
    
    let navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .matches(/^[a-z\u0590-\u05fe]+$/i, "שם פרטי חייב להכיל רק תווים.")
            .required('נדרש שם פרטי.'),
        lastName: Yup.string()
            .matches(/^[a-z\u0590-\u05fe]+$/i, "שם משפחה חייב להכיל רק תווים.")
            .required('נדרש שם משפחה.'),
        email: Yup.string()
            .matches(
                /[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](gmail.com|hotmail.com|yahoo.com|walla.com|walla.co.il)/,
                "דואר אלקטרוני חייב יכול מורכב מתכונות הדואר הבאות: hotmail.com | gmail.com | yahoo.com | walla.com | walla.co.il .",
            )
            .email('דוא"ל לא תקין.')
            .required('יש צורך בדוא"ל.'),
        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                "סיסמה חייבת להכיל 8 תווים לפחות, אות אחת גדולה, אות קטנה אחת, מספר אחד ותו אות מיוחד אחד."
            )
            // .required('דרוש סיסמא.'),
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        accountService.update(user.id, fields)
            .then(() => {
                alertService.success('עודכן בהצלחה.', { keepAfterRouteChange: true });
                navigate(-1);
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    const [isDeleting, setIsDeleting] = useState(false);
    function onDelete() {
        if (window.confirm('Are you sure?')) {
            setIsDeleting(true);
            accountService.delete(user.id)
                .then(() => alertService.success('Account deleted successfully'));
        }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <h1>Update Profile</h1>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label>First Name</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-5">
                            <label>Last Name</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </div>
                    <h3 className="pt-3">Change Password</h3>
                    <p>Leave blank to keep the same password</p>
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary mr-2">
                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            עדכן פרטים
                        </button>
                        <button type="button" onClick={() => onDelete()} className="btn btn-danger" style={{ width: '75px' }} disabled={isDeleting}>
                            {isDeleting
                                ? <span className="spinner-border spinner-border-sm"></span>
                                : <span>מחק</span>
                            }
                        </button>
                        <Link to="/profile/details" className="btn btn-link">ביטול</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export { Update };