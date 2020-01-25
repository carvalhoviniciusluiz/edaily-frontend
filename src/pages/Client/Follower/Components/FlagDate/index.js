import React from 'react';
import { MdAccessTime } from 'react-icons/md';

import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function FlagDate({ document, show = false }) {
  return (
    show && (
      <strong className="current-date">
        <MdAccessTime />
        <span>{document.date}</span>
      </strong>
    )
  );
}

FlagDate.propTypes = {
  document: PropTypes.shape({
    date: PropTypes.string,
    cancellation: PropTypes.shape({}),
    forwardeding: PropTypes.shape({}),
  }).isRequired,
  show: PropTypes.bool.isRequired,
};
