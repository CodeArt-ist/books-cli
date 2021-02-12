import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Get = async (url, callback, headers) => {

  let defaultHeaders = await setHeader(headers);

  return fetch(url, {
    headers: defaultHeaders,
  })
    .then(response => response.json())
    .then(responseJson => {

      return callback(responseJson, false);

    })
    .catch(error => {
      if (error.statusCode === 401) {
        AsyncStorage.removeItem('token');
      }
      return callback(false, error);
    });
};

export const Post = async (url, body, callback, headers) => {

  let defaultHeaders = await setHeader(headers);

  return fetch(url, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify({
      ...body,
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      return callback(responseJson, false);
    })
    .catch(error => {
      if (error.statusCode === 401) {
        AsyncStorage.removeItem('token');
      }
      return callback(false, error);
    });
};

const setHeader = async (headers) => {
  let defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  if (headers) {
    defaultHeaders = { ...defaultHeaders, headers };
  }

  const accessToken = await AsyncStorage.getItem('token');

  if (accessToken) {
    defaultHeaders = { ...defaultHeaders, 'Authorization': `Bearer ${accessToken}` };
  }

  return defaultHeaders;
};