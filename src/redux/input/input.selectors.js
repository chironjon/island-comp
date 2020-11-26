import { createSelector } from 'reselect';

const selectInput = state => state.input;

export const selectHemi = createSelector(
  [selectInput],
  input => input.hemi
);

export const selectMonth = createSelector(
  [selectInput],
  input => input.month
);

export const selectSecondMonth = createSelector(
  [selectInput],
  input => input.secondMonth
);

export const selectHour = createSelector(
  [selectInput],
  input => input.hour
);

export const selectSecondHour = createSelector(
  [selectInput],
  input => input.secondHour
);

export const selectListType = createSelector(
  [selectInput],
  input => input.listType
);

export const selectListTime = createSelector(
  [selectInput],
  input => input.listTime
);

export const selectSearchField = createSelector(
  [selectInput],
  input => input.searchField
);

export const selectSort = createSelector(
  [selectInput],
  input => input.sortBy
);

export const selectOrder = createSelector(
  [selectInput],
  input => input.order
);