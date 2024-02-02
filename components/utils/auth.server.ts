import React from 'react';

const clearAuthToken = () => {
  return new Promise<void>((resolve) => {
    localStorage.removeItem('token');
    resolve();
  });
};
const redirectToLogin = () => {
  return new Promise<void>((resolve) => {
    window.location.href = '/login';
    resolve();
  });
};

export const logout = async () => {
  await clearAuthToken();
  await redirectToLogin();
};