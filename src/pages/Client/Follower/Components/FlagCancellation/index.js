import React from 'react';
import { MdAccessTime, MdPermIdentity } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Canceled } from './styles';

export default function FlagCancellation({ document }) {
  return (
    document.cancellation && (
      <>
        <Canceled className="event-author">
          <MdPermIdentity size={22} />
          <span>
            {document.cancellation.author.firstname}
            <span>{document.cancellation.author.lastname}</span>
          </span>
        </Canceled>
        <Canceled className="date">
          <MdAccessTime />
          <span>{document.cancellation.canceledAt}</span>
        </Canceled>
      </>
    )
  );
}

FlagCancellation.propTypes = {
  document: PropTypes.shape({
    cancellation: PropTypes.shape({
      author: PropTypes.shape({
        firstname: PropTypes.string,
        lastname: PropTypes.string,
      }),
      canceledAt: PropTypes.string,
    }),
  }).isRequired,
};
