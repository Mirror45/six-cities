import { store } from '../store';
import { setError } from '../store/action/action';
import { clearErrorAction } from '../store/action/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
