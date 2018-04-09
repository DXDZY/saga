import {
    createSelector
} from 'reselect';

const data = (state) => state.carDetail.data.data;
const isLoading = (state) => state.carDetail.isLoading;
const payLoad = (state) => state.carDetail.payLoad;

export const getCarDetailProps = createSelector(
    [data, isLoading, payLoad], (data, isLoading, payLoad) => ({
        data,
        isLoading,
        payLoad,
    })
)