import { SlicesName } from '../../../const';
import { State } from '../../../types/state';

export const getSortType = (state: State): string => state[SlicesName.Page].sortType;
export const getCurrentOfferId = (state: State): number | null => state[SlicesName.Page].currentOfferId;
