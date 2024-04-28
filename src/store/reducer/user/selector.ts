import { NameSpace } from '../../../const';
import { State } from '../../../types/state';
import { AuthorizationStatus } from '../../../const';

export const getAuthorizationStatus = (state: State) => state[NameSpace.USER].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.USER].authorizationStatus !== AuthorizationStatus.Unknown;
export const getMarkerMap = (state: State) => state[NameSpace.USER].markerMap;
