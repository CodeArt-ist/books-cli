import { createSlice } from '@reduxjs/toolkit';
import { Get } from '../../config/services/api/Api';
import { APP } from '../../../app.config';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    loading: true,
    results: [],
  },
  reducers: {
    search(state, action) {
      state.results = action.payload;
      state.loading = false
    },
  },
});

export const { search } = bookSlice.actions;
export default bookSlice.reducer;


export const searchAsync = (searchTerm) => async dispatch => {
  await Get(APP.API_URL+"/book/"+searchTerm,(res,err) => {
      if (res) {
        dispatch(search(res))
      }
  })
}