import { createSlice } from '@reduxjs/toolkit';
import { Get } from '../../config/services/api/Api';
import { APP } from '../../../app.config';

const bookSlice = createSlice({
  name: 'bookReducer',
  initialState: {
    loading: true,
    results: [],
    self: {},
  },
  reducers: {
    search(state, action) {
      state.results = action.payload;
    },
    selfLink(state, action) {
      state.self = action.payload;
      state.loading = false;
    },
  },
});

export const { search, selfLink } = bookSlice.actions;
export default bookSlice.reducer;


export const searchAsync = (searchTerm) => async dispatch => {
  await Get(APP.API_URL + '/book/search/' + searchTerm, (res, err) => {
    if (res) {
      dispatch(search(res));
    }
    if (err) {
      dispatch(search([]));
    }
  });
};

export const selfLinkAsync = (url) => async dispatch => {
  await Get(APP.API_URL + '/book/selfLink?url=' + url, (res, err) => {
    if (res) {
      dispatch(selfLink(res));
    }
    if (err) {
      dispatch(selfLink({}));
    }
  });
};