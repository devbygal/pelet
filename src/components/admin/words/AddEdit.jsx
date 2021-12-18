import React, { useEffect, useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { alertService } from '../../_services';
import { wordService } from '../../_services/words.service';

export const AddEdit = () => {
    const navigate = useNavigate();
    const formikRef = useRef();

    const { id } = useParams();
    const isAddMode = !id;

    const initialValues = {
        wordCode: '',
        letter: '',
        word: '',
        translation: '',
    };

    const validationSchema = Yup.object().shape({
        wordCode: Yup.string()
            .required('נדרש קוד מילה.'),
        letter: Yup.string()
            .required('נדרש להזין אות.'),
        word: Yup.string()
            .required('נדרש להזין מילה .'),
        translation: Yup.string()
            .required('יש צורך בתרגום.'),

    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        if (isAddMode) {
            console.log(1)
            createWord(fields, setSubmitting);
        } else {
            console.log(2)
            updateWord(id, fields, setSubmitting);
        }
    }

    function createWord(fields, setSubmitting) {
        wordService.postWord(fields)
            .then(() => {
                alertService.success('המילה נוסף בהצלחה', { keepAfterRouteChange: true });
                navigate(-2);
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    function updateWord(id, fields, setSubmitting) {
        wordService.updateWord(id, fields)
            .then(() => {
                alertService.success('עודכן בהצלחה', { keepAfterRouteChange: true });
                navigate('/admin/words');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    useEffect(() => {
        if (!isAddMode) {
            // get word and set form fields
            wordService.getByWordId(id).then(word => {
                const fields = ['wordCode', 'letter', 'word', 'translation'];
                fields.forEach(field => formikRef.current.setFieldValue(field, word[field], false));
            });
        }
    }, []);

    return (

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} innerRef={formikRef}>
            {({ errors, touched, isSubmitting, setFieldValue }) => {
                return (
                    <Form>
                        <h1>{isAddMode ? 'הוסף מילה' : 'ערוך מילה'}</h1>
                        <div className="form-group col">
                                <label>קוד מילה </label>
                                <Field name="wordCode" type="number" className={'form-control' + (errors.wordCode && touched.wordCode ? ' is-invalid' : '')} />
                                <ErrorMessage name="wordCode" component="div" className="invalid-feedback" />
                            </div>
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label>אות </label>
                                <Field name="letter" type="number" as="select" className={'form-control' + (errors.letter && touched.letter ? ' is-invalid' : '')}/>
                                <ErrorMessage name="letter" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>מילה  </label>
                                <Field name="word" type="text" className={'form-control' + (errors.word && touched.word ? ' is-invalid' : '')} />
                                <ErrorMessage name="word" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-7">
                                <label>תרגום</label>
                                <Field name="translation" type="text" className={'form-control' + (errors.translation && touched.translation ? ' is-invalid' : '')} />
                                <ErrorMessage name="translation" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                שמירת נתונים
                            </button>
                            <Link to="/admin/words" className="btn btn-link">חזור</Link>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}