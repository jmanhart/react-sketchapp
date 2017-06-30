import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { render } from 'react-sketchapp';
import chroma from 'chroma-js';

//Import Scenes
import Page from './scenes/page.js'

const Document = ({ colors }) => (
    <Page />
);

Document.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default (context) => {
  render(<Document  />, context.document.currentPage());
};
