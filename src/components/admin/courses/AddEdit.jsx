import React, { useEffect, useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import { Link, useNavigate, useParams } from 'react-router-dom';
import { alertService } from '../../_services';
import { lessonService } from '../../_services/lessons.service';

export const AddEdit = () => {
    const navigate = useNavigate();
    const formikRef = useRef();

    const { id } = useParams();
    const isAddMode = !id;

    const initialValues = {
        lessonCode: '',
        studyLanguageCode: '',
        videoName: '',
        description: '',
    };

    const validationSchema = Yup.object().shape({
        lessonCode: Yup.string()
            .required('נדרש קוד שיעור.'),
        studyLanguageCode: Yup.string()
            .required('נדרש קוד שפה.'),
        videoName: Yup.string()
            .required('נדרש נתיב לסרטון.'),
        description: Yup.string()
            .required('יש צורך בתיאור.'),
      
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        if (isAddMode) {
            console.log(1)
            createLesson(fields, setSubmitting);
        } else {
            console.log(2)
            updateLesson(id, fields, setSubmitting);
        }
    }

    function createLesson(fields, setSubmitting) {
        lessonService.postLesson(fields)
            .then(() => {
                alertService.success('השיעור נוסף בהצלחה', { keepAfterRouteChange: true });
                navigate(-2);
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    function updateLesson(id, fields, setSubmitting) {
        lessonService.updateLesson(id, fields)
            .then(() => {
                alertService.success('עודכן בהצלחה', { keepAfterRouteChange: true });
                navigate('/admin/courses');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    useEffect(() => {
        if (!isAddMode) {
            // get user and set form fields
            lessonService.getByCourseId(id).then(lesson => {
                const fields = ['lessonCode', 'studyLanguageCode', 'videoName', 'description'];
                fields.forEach(field => formikRef.current.setFieldValue(field, lesson[field], false));
            });
        }
    }, []);

    return (

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} innerRef={formikRef}>
            {({ errors, touched, isSubmitting, setFieldValue }) => {
                return (
                    <Form>
                        <h1>{isAddMode ? 'הוסף שיעור' : 'ערוך שיעור'}</h1>
                        <div className="form-group col">
                                <label>קוד שיעור </label>
                                <Field name="lessonCode" type="number" className={'form-control' + (errors.lessonCode && touched.lessonCode ? ' is-invalid' : '')} />
                                <ErrorMessage name="lessonCode" component="div" className="invalid-feedback" />
                            </div>
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label>קוד שפה</label>
                                <Field name="studyLanguageCode" type="number" as="select" className={'form-control' + (errors.studyLanguageCode && touched.studyLanguageCode ? ' is-invalid' : '')}>
                                    <option value={0}></option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>  
                                    <option value={30}>30</option> 
                                    <option value={40}>40</option> 
                                    <option value={50}>50</option> 
                                    <option value={60}>60</option> 
                                    <option value={70}>70</option> 
                                    <option value={80}>80</option> 
                                    <option value={90}>90</option> 
                                </Field>
                                <ErrorMessage name="studyLanguageCode" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>נתיב סרטון </label>
                                <Field name="videoName" type="text" className={'form-control' + (errors.videoName && touched.videoName ? ' is-invalid' : '')} />
                                <ErrorMessage name="videoName" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-7">
                                <label>תיאור</label>
                                <Field name="description" type="text" className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')} />
                                <ErrorMessage name="description" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                שמירת נתונים
                            </button>
                            <Link to="/admin/courses" className="btn btn-link">חזור</Link>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}