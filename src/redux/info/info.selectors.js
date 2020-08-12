import { createSelector } from 'reselect';

const hiddenInfo = state => state.info;

export const hidden = createSelector(
  [hiddenInfo],
  info => info.hidden
);