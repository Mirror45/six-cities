import { createSlice } from '@reduxjs/toolkit';
import { sendOfferCommentAction } from '../../action/api-actions';
import { SlicesName } from '../../../const';
import { UserReview } from '../../../types/state';

const initialState: UserReview = {
  isCommentDataSending: false,
};

export const userReview = createSlice({
  name: SlicesName.OffersData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(sendOfferCommentAction.pending, (state) => {
        state.isCommentDataSending = true;
      })
      .addCase(sendOfferCommentAction.fulfilled, (state) => {
        state.isCommentDataSending = false;
      })
      .addCase(sendOfferCommentAction.rejected, (state) => {
        state.isCommentDataSending = false;
      });
  }
});
