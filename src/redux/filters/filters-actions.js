import { FiltersActionTypes } from './filters-types';

export const setSideBarFilters = (newFilters) => ({
    type: FiltersActionTypes.SET_SIDEBAR_FILTERS,
    payload: newFilters,
});

export const toggleSideBarDropped = () => ({
    type: FiltersActionTypes.TOGGLE_SIDEBAR_DROPPED,
});