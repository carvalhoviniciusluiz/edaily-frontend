import React from 'react';

import PropTypes from 'prop-types';

import { Avatar, Identicon } from './styles';

export default function AvatarOrIdenticon({ user, encapsulated, size }) {
  const verifyUser = () => {
    return user && user.avatar ? (
      <img src={user.avatar.avatar} alt="Avatar" />
    ) : (
      <Identicon
        string={`${user && user.firstname} ${user && user.lastname}`}
        size={size}
        bg="#fff"
        fg="#333"
      />
    );
  };

  return encapsulated ? <Avatar>{verifyUser()}</Avatar> : verifyUser();
}

AvatarOrIdenticon.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    avatar: PropTypes.shape({
      avatar: PropTypes.string,
    }),
  }).isRequired,
  size: PropTypes.number.isRequired,
  encapsulated: PropTypes.bool.isRequired,
};
