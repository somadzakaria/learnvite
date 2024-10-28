import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    return [...state, action.payload];
  });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

console.log("oncreate store :", store.getState());

store.subscribe(() => {
  console.log("CHANGE STORE", store.getState());
});

store.dispatch(
  addToCart({
    id: 22,
    qty: 23,
  })
);

store.dispatch(
  addToCart({
    id: 11,
    qty: 22,
  })
);

store.dispatch(login());
