import React from 'react';

import PropTypes from 'prop-types';

import { Avatar, Identicon } from './styles';

export default function AvatarOrIdenticon({ children, ...rest }) {
  const { user, encapsulated, size } = rest;

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

  return encapsulated ? (
    <Avatar>
      {verifyUser()}
      {children}
    </Avatar>
  ) : (
    <>
      {verifyUser()}
      {children}
    </>
  );
}

AvatarOrIdenticon.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
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
