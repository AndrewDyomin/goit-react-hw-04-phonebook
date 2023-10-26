import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

export const AddCustomItem = ({ create }) => {
    const [fields, setFields] = useState(['name', 'price'])


    return (
        <div>
            <hr width='100%'></hr>
            <h2>Add Custom Items</h2>
            <Formik
            initialValues={{
                initialFields: fields,
            }}
            onSubmit={ (values,{resetForm}) => {
                create(values);
                resetForm();
            }}
            >
            <Form>
            {fields.map(field => (
                <div key={field}>
                    <label htmlFor={field}>{field}</label>
                    <Field 
                    id={field} 
                    name={field} 
                    placeholder="Enter something" 
                    type="text" 
                    required/>
                </div>
            ))}
                <div key="2">
                    <button type="submit">Add item</button>
                </div>
            </Form>
            </Formik>
        </div>

    );
};