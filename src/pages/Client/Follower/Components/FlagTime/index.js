import React from 'react';

import PropTypes from 'prop-types';

import { Time } from './styles';

export default function FlagDate({ document }) {
  const getTime = doc => {
    if (doc.cancellation) {
      return doc.cancellation.time;
    }

    if (doc.forwardeding) {
      return doc.forwardeding.time;
    }

    return doc.time;
  };

  return <Time>{getTime(document)}</Time>;
}

FlagDate.propTypes = {
  document: PropTypes.shape({
    cancellation: PropTypes.shape({}),
    forwardeding: PropTypes.shape({}),
  }).isRequired,
};
