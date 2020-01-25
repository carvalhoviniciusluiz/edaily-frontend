import React from 'react';
import { MdAccessTime, MdPermIdentity } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Forwarding } from './styles';

export default function FlagForwarding({ document }) {
  return (
    document.forwarding && (
      <>
        <Forwarding className="event-author">
          <MdPermIdentity size={22} />
          <span>
            {document.forwarding.author.firstname}
            <span>{document.forwarding.author.lastname}</span>
          </span>
        </Forwarding>
        <Forwarding className="date">
          <MdAccessTime />
          <span>{document.forwarding.forwardedAt}</span>
        </Forwarding>
      </>
    )
  );
}

FlagForwarding.propTypes = {
  document: PropTypes.shape({
    forwarding: PropTypes.shape({
      author: PropTypes.shape({
        firstname: PropTypes.string,
        lastname: PropTypes.string,
      }),
      forwardedAt: PropTypes.string,
    }),
  }).isRequired,
};
