import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import reducerAddBooks from "./reducers/reducerAddBooks";
import { thunk } from "redux-thunk";
import reducerFetchBooks from "./reducers/reducerFetchBooks";

const rootReducer = combineReducers({
  library: reducerAddBooks,
  search: reducerFetchBooks,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
