import { Field, Formik } from 'formik';
import { SearchBox } from './SearchBar.styled';

const initialValues = {
  query: '',
};

export const SearchBar = ({ onQuery }) => {
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
