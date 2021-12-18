import React, { useEffect, useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '../../_services';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const AddEdit = () => {
    const navigate = useNavigate();
    const formikRef = useRef();

    const { id } = useParams();
    const isAddMode = !id;

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        roleUser: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        roleUser: Yup.string()
            .required('נדרש סוג משתמש.'),
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
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        if (isAddMode) {
            console.log(1)
            createUser(fields, setSubmitting);
        } else {
            console.log(2)
            updateUser(id, fields, setSubmitting);
        }
    }

    function createUser(fields, setSubmitting) {
        accountService.create(fields)
            .then(() => {
                alertService.success('המשתמש נוסף בהצלחה', { keepAfterRouteChange: true });
                navigate(-2);
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    function updateUser(id, fields, setSubmitting) {
        accountService.update(id, fields)
            .then(() => {
                alertService.success('עודכן בהצלחה', { keepAfterRouteChange: true });
                navigate(-2);
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    useEffect(() => {
        if (!isAddMode) {
            // get user and set form fields
            accountService.getById(id).then(user => {
                const fields = ['roleUser', 'firstName', 'lastName', 'email'];
                fields.forEach(field => formikRef.current.setFieldValue(field, user[field], false));
            });
        }
    }, [id, isAddMode]);

    return (

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} innerRef={formikRef}>
            {({ errors, touched, isSubmitting, setFieldValue }) => {
                return (
                    <Form>
                        <h1>{isAddMode ? 'הוסף משתמש' : 'ערוך משתמש'}</h1>
                        <div className="form-group col">
                                <label>סוג משתמש</label>
                                <Field name="roleUser" as="select" className={'form-control' + (errors.roleUser && touched.roleUser ? ' is-invalid' : '')}>
                                    <option value=""></option>
                                    <option value="משתמש">משתמש</option>
                                    <option value="מנהל">מנהל</option>
                                </Field>
                                <ErrorMessage name="roleUser" component="div" className="invalid-feedback" />
                            </div>
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label>שם פרטי</label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>שם משפחה</label>
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-7">
                                <label>דואר אלקטרוני</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        {!isAddMode &&
                            <div>
                                <h3 className="pt-3">שנה סיסמא</h3>
                                <p>השאר ריק כדי לשמור את אותה סיסמה</p>
                            </div>
                        }
                        <div className="form-row">
                            <div className="form-group col">
                                <label>סיסמה</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                שמירת נתונים
                            </button>
                            <Link to={isAddMode ? -2 : -2} className="btn btn-link">חזור</Link>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}