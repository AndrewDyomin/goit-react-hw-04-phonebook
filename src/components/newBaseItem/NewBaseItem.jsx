import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

export const AddBaseItem = ({ create }) => {
    const [fields, setFields] = useState(['name', 'price', 'units'])

   const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.fieldName.value;
        if (name.length !== 0) {
            setFields(prevState => [...prevState, name]);
        }
        form.reset();
      };

    return (
        <div>
            <h1>Items</h1>
            <hr width='100%'></hr>
            <h2>Add Primitive Items</h2>
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
            <div key="3">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="fieldName" />
                    <button type="submit">add field</button>
                </form>
            </div>
        </div>

    );
};