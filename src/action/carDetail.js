import {createAction} from 'redux-actions';

export const getDate = createAction('carDetail/getData');
export const getDataSuccess = createAction('carDetail/getDataSuccess');
export const getDataError = createAction('carDetail/getDataError');
export const getSoundType = createAction('carDetail/getSoundType');