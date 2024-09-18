import { SlicesName } from '../../../const';
import { State } from '../../../types/state';


export const getAuthorizationStatus = (state: State): string => state[SlicesName.User].authorizationStatus;
export const getUserEmail = (state: State): string => state[SlicesName.User].userEmail;
export const getMarkerMap = (state: State) => state[SlicesName.User].markerMap;
