import { configureStore } from '@reduxjs/toolkit'
import { api } from '../api';
import likedReducer from '../slices/like-slice';
import cartReducer from '../slices/cart-slice';
import authReducer from '../slices/auth-slice';


export const store = configureStore({
    reducer: {
      liked: likedReducer,
      cart: cartReducer, 
      auth: authReducer,
      

      [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
  })

export type RootState = ReturnType<typeof store.getState>;