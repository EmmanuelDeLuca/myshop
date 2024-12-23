
import { userReducer } from "./UserReducer/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  userReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
