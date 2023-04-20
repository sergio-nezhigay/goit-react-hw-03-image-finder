import React from 'react';
import {
  SearchbarWrapper,
  SearchbarForm,
  SearchButton,
  SearchButtonLabel,
} from './SearchBar.styled';

export default function SearchBar() {
  return (
    <SearchbarWrapper>
      <SearchbarForm>
        <SearchButton type="submit" class="button">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchbarForm>
    </SearchbarWrapper>
  );
}
