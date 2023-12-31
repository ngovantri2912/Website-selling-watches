import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import authReducer from "redux/slicers/auth.slice";
import productReducer from "./redux/slicers/product.slice";
import categoryReducer from "./redux/slicers/category.slice";
import reviewReducer from "./redux/slicers/review.slice";
import cartReducer from "./redux/slicers/cart.slice";
import locationReducer from "./redux/slicers/location.slice";
import orderReducer from "./redux/slicers/order.slice";
import favoriteReducer from "./redux/slicers/favorite.slice";
import addressReducer from "./redux/slicers/address.slice";
import searchSuggestionReducer from "redux/slicers/searchSuggestion.slice";

import rootSaga from "./redux/sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
    review: reviewReducer,
    cart: cartReducer,
    location: locationReducer,
    order: orderReducer,
    favorite: favoriteReducer,
    address: addressReducer,
    search: searchSuggestionReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export { store };
