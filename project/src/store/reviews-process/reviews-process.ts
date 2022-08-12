import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewsProcess } from '../../types/state';
import { fetchCommentsAction, postCommentAction } from '../api-actions';

const initialState: ReviewsProcess = {
  reviews: [],
  isShowLoader: false,
  isLoadingFailed: false,
};

export const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isShowLoader = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isShowLoader = false;
        state.isLoadingFailed = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isShowLoader = false;
        state.isLoadingFailed = true;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isShowLoader = true;
      })
      .addCase(postCommentAction.fulfilled, (state) => {
        state.isShowLoader = false;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.isShowLoader = false;
      });
  }
});
