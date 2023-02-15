import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import listItem from "../../../types";

const todoListInitialState = [] as listItem[];

const toDoListSlice = createSlice({
  name: "list",
  initialState: todoListInitialState,
  reducers: {
    loadToDoList: (state, action: PayloadAction<listItem[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadToDoList: loadToDoListActionCreator } =
  toDoListSlice.actions;

export const reducer = toDoListSlice.reducer;
