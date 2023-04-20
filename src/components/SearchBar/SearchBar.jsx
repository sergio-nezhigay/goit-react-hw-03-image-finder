import React from 'react';
import { Formik, ErrorMessage } from 'formik';

import { object, string } from 'yup';

import {
  SearchbarWrapper,
  SearchbarForm,
  SearchButton,
  SearchButtonLabel,
  Input,
} from './SearchBar.styled';

let schema = object({
  search: string().required(),
});

export default function SearchBar({ onSubmit }) {
  return (
    <SearchbarWrapper>
      <Formik
        initialValues={{ search: '' }}
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
