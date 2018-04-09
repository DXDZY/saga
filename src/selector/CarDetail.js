import {
    createSelector
} from 'reselect';

const data = (state) => state.carDetail.data.data;
const isLoading = (state) => state.carDetail.isLoading;
const currentSoundType = (state) => state.carDetail.currentSoundType;

export const getCarDetailProps = createSelector(
    [data, isLoading, currentSoundType], (data, isLoading, currentSoundType) => ({
        data,
        isLoading,
        currentSoundType,
    })
)