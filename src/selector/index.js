import {
    createSelector
} from 'reselect';

const carDetail = (state) => state.carDetail;

export const getState = createSelector(
    [carDetail], (carDetail) => ({
        carDetail,
    })
)