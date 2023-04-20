import React, { Component } from 'react';

import { Container } from 'components';
import SearchBar from 'components/SearchBar/SearchBar';

export class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
      </Container>
    );
  }
}
