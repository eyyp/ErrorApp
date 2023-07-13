import React, {useState} from 'react';
import {emailRegex} from './regex';
export const signUpValidation = (
  email,
  password,
  passwordAgain,
  bio
) => {
  try {
    var response = {situation: true};
    if (bio.length < 1) {
      response = {
        ...response,
        message: 'Lütfen biyografi alanını doldurunuz',
        situation: false,
      };
    }
    if (email.length < 1) {
      response = {
        ...response,
        message: 'Lütfen bu alanı doldurunuz',
        situation: false,
      };
    } else {
      if (!emailRegex.test(email)) {
        response = {
          ...response,
          message: 'Emaili doğru girdiğinizden emin olun',
          situation: false,
        };
      }
    }
    if (password.length < 6 || passwordAgain.length < 6) {
      response = {
        ...response,
        message: 'Şifre en az 6 karakterli olmalı. ',
        situation: false,
      };
    } else {
      if (password != passwordAgain) {
        response = {
          ...response,
          message: 'Şifreler eşleşmiyor.',
          situation: false,
        };
      }
    }

    if (response?.situation != false) {
      response = {
        message: 'İşlem Başarılı',
        situation: true,
      };
    }
    return response;
  } catch (error) {
    console.log('error');
    response = {
      Message: 'Hata lütfen tekrar deneyin',
      situation: true,
    };
    return response;
  }
};