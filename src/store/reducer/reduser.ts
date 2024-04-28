import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { dataApi } from './data/data';
import { userProcess } from './user/user';

export const reducer = combineReducers({
  [NameSpace.DATA]: dataApi.reducer,
  [NameSpace.USER]: userProcess.reducer,
});
