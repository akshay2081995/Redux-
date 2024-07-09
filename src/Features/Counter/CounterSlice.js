import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    users: [
      {
        name: "Akshay Kumar",
        email: "akshay@gmail.com",
        password: "7418",
        confirmPassword: "7418",
      },
    ],
    activeUser: false,
    items: [],
    cartCount: 0,
  },
  reducers: {
    adduser: (state, action) => {
      state.users.push(action.payload);
      state.activeUser = action.payload;
    },
    userActive: (state, action) => {
      state.activeUser = action.payload;
    },
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.cartCount -= 1;
    },
    cartcounting: (state, action) => {
      state.cartCount += action.payload;
    },
  },
});

export const {
  adduser,
  userActive,
  addToBasket,
  cartcounting,
  removeFromBasket,
} = counterSlice.actions;

export default counterSlice.reducer;
