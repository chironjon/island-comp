import { createSelector } from 'reselect';

const selectCollection = state => state.collections;

export const selectCollections = createSelector(
  [selectCollection],
  collections => collections.collections
);