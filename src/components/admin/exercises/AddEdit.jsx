import React, { useEffect, useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import { Link, useNavigate, useParams } from 'react-router-dom';
import { alertService } from '../../_services';
import { exerciseService } from '../../_services/exercise.service';

export const AddEdit = () => {
    const navigate = useNavigate();
    const formikRef = useRef();

    const { id } = useParams();
    const isAddMode = !id;

    const initialValues = {
        exerciseCode: '',
        studyLanguageCode: '',
        exerciseTopic: '',
        question: '',
        answer: '',
        description: '',
    };

    const validationSchema = Yup.object().shape({
        exerciseCode: Yup.string()
            .required('נדרש קוד תרגיל.'),
        studyLanguageCode: Yup.string()
            .required('נדרש קוד שפה.'),
        exerciseTopic: Yup.string()
            .required('נדרש נושא תרגיל.'),
        question: Yup.string()
            .required('יש צורך בשאלה.'),
        answer: Yup.string()
            .required('יש צורך בתשובה.'),            
        description:Yup.string()
            .required('יש צורך בתוכן.'), 
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        if (isAddMode) {
            console.log(1)
            createExercise(fields, setSubmitting);
        } else {
            console.log(2)
            updateExercise(id, fields, setSubmitting);
        }
    }

    function createExercise(fields, setSubmitting) {
        exerciseService.postExercise(fields)
            .then(() => {
                alertService.success('השיעור נוסף בהצלחה', { keepAfterRouteChange: true });
                navigate(-2);
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    function updateExercise(id, fields, setSubmitting) {
        exerciseService.updateExercise(id, fields)
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
            exerciseService.getByExerciseId(id).then(exercise => {
                const fields = ['exerciseCode', 'studyLanguageCode', 'exerciseTopic','question','answer', 'description'];
                fields.forEach(field => formikRef.current.setFieldValue(field, exercise[field], false));
            });
        }
    }, []);

    return (

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} innerRef={formikRef}>
            {({ errors, touched, isSubmitting, setFieldValue }) => {
                return (
                    <Form>
                        <h1>{isAddMode ? 'הוסף תרגיל' : 'ערוך תרגיל'}</h1>
                        <div className="form-group col">
                                <label>קוד תרגיל </label>
                                <Field name="exerciseCode" type="number" className={'form-control' + (errors.exerciseCode && touched.exerciseCode ? ' is-invalid' : '')} />
                                <ErrorMessage name="exerciseCode" component="div" className="invalid-feedback" />
                            </div>
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label>קוד שפה</label>
                                <Field name="studyLanguageCode" type="number" as="select" className={'form-control' + (errors.studyLanguageCode && touched.studyLanguageCode ? ' is-invalid' : '')}>
                                    <option value={0}></option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>  
                                </Field>
                                <ErrorMessage name="studyLanguageCode" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>נושא תרגיל</label>
                                <Field name="exerciseTopic" type="text" className={'form-control' + (errors.exerciseTopic && touched.exerciseTopic ? ' is-invalid' : '')} />
                                <ErrorMessage name="exerciseTopic" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-7">
                                <label>שאלה</label>
                                <Field name="question" type="text" className={'form-control' + (errors.question && touched.question ? ' is-invalid' : '')} />
                                <ErrorMessage name="question" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-7">
                                <label>תשובה</label>
                                <Field name="answer" type="text" className={'form-control' + (errors.answer && touched.answer ? ' is-invalid' : '')} />
                                <ErrorMessage name="answer" component="div" className="invalid-feedback" />
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
                            <Link to={isAddMode ? -2 : -2} className="btn btn-link">חזור</Link>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}