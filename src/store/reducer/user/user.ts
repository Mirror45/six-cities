import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../../const';
import { UserProcess } from '../../../types/state';
import {checkAuthAction, loginAction, logoutAction} from '../../action/api-actions';
import { activeMarkerMap } from '../../action/action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  markerMap: null,
};

export const userProcess = createSlice({
  name: NameSpace.USER,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(activeMarkerMap, (state, action) => {
        state.markerMap = action.payload;
      });
  }
});
