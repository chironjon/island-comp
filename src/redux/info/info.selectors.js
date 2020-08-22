import { createSelector } from 'reselect';

const selectInfo = state => state.info;

export const selectInfoHidden = createSelector(
  [selectInfo],
  info => info.hidden
);