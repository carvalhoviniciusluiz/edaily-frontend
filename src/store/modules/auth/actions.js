export function signInRequest(credential, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { credential, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function forgotPasswordRequest(email) {
  return {
    type: '@auth/FORGOT_PASSWORD_REQUEST',
    payload: { email },
  };
}

export function forgotPasswordSuccess() {
  return {
    type: '@auth/FORGOT_PASSWORD_SUCCESS',
  };
}

export function forgotPasswordFailure() {
  return {
    type: '@auth/FORGOT_PASSWORD_FAILURE',
  };
}

export function resetPasswordRequest(
  recovery_token,
  password,
  password_confirmation
) {
  return {
    type: '@auth/RESET_PASSWORD_REQUEST',
    payload: { recovery_token, password, password_confirmation },
  };
}

export function resetPasswordSuccess() {
  return {
    type: '@auth/RESET_PASSWORD_SUCCESS',
  };
}

export function resetPasswordFailure() {
  return {
    type: '@auth/RESET_PASSWORD_FAILURE',
  };
}
