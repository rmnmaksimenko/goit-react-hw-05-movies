import { Field, Formik } from 'formik';
import { SearchBox } from './SearchBar.styled';

export const SearchBar = ({ onQuery, value }) => {
  const initialValues = {
    query: value,
  };

  const HandleSearch = (values, { resetForm }) => {
    const { query } = values;
    if (query.trim() === '') {
      return;
    }
    onQuery(query.toLowerCase().trim());
    // resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={HandleSearch}>
      <SearchBox>
        <Field
          type="text"
          name="query"
          placeholder="Search movie"
          autoFocus
          required
        />
        <button type="sublit">Search</button>
      </SearchBox>
    </Formik>
  );
};
