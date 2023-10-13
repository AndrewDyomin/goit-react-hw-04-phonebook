import { Formik, Field, Form } from 'formik';
import { Container, FormItem } from './NewContact.styled';
import { useState } from 'react';

export const AddContact = ({ create }) => {
    const [fields, setFields] = useState(['name', 'price'])

   const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.fieldName.value;
        setFields(prevState => [...prevState, name]);
        form.reset();
      };

    return (
        <Container>
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
                <FormItem key={field}>
                    <label htmlFor={field}>{field}</label>
                    <Field 
                    id={field} 
                    name={field} 
                    placeholder="Enter something" 
                    type="text" 
                    required/>
                </FormItem>
            ))}
                <FormItem key="2">
                    <button type="submit">Add item</button>
                </FormItem>
            </Form>
            </Formik>
            <FormItem key="3">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="fieldName" />
                    <button type="submit">add field</button>
                </form>
            </FormItem>
        </Container>

    );
};