import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { reducer } from "./features/toDoListSlice.ts/toDoListSlice";

export const store = configureStore({
  reducer: {
    list: reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
