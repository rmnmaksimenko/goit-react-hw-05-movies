import { Field, Form, Formik } from 'formik';

const initialValues = {
  query: '',
};

export const SearchBox = ({ onQuery }) => {
  const HandleSearch = (values, { resetForm }) => {
    const { query } = values;
    if (query.trim() === '') {
      return;
    }
    onQuery(query.toLowerCase().trim());
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={HandleSearch}>
      <Form>
        <Field
          type="text"
          name="query"
          placeholder="Search movie"
          autoFocus
          required
        />
        <button type="sublit">OK</button>
      </Form>
    </Formik>
  );
};
