import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { object, string } from 'yup';

import {
  SearchbarWrapper,
  SearchbarForm,
  SearchButton,
  SearchButtonLabel,
  Input,
} from './SearchBar.styled';

let schema = object({
  searchText: string().required(),
});

export function SearchBar({ onSubmit }) {
  return (
    <SearchbarWrapper>
      <Formik
        initialValues={{ searchText: '' }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <SearchbarForm>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <Input
            type="text"
            name="searchText"
            autoComplete="true"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchbarForm>
      </Formik>
    </SearchbarWrapper>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
