import {createAction} from '@reduxjs/toolkit';
import {
  Credential,
  VerifyOtpPayload,
} from '../../domains/entities/authentications';


export const signOut = createAction('authenrications/signOut');
