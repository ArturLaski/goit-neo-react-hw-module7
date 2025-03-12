import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

import css from './ContactForm.module.css';

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must contain at least 3 chars')
    .max(50, 'Name must not exceed 50 chars')
    .required('This field is required'),
  number: Yup.string()
    .min(3, 'Number must contain at least 3 chars')
    .matches(
      /^[\d+\-()]{1,11}$/g,
      'Number must contain max 11 digits including +()-'
    )
    .required('This field is required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const onFormSubmit = (contactData, actions) => {
    dispatch(addContact(contactData));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onFormSubmit}
      validationSchema={ContactValidationSchema}
    >
      
      <Form className={css.formContainer}>
        
        <label className={css.label}>Name</label>
          
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        
        <label className={css.label}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            maxLength="11"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
