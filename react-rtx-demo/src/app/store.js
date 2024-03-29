import {configureStore} from '@reduxjs/toolkit'
import {logger} from 'redux-logger'
import cakeSlice from '../features/cake/cakeSlice';
import icecreamSlice from '../features/icecream/icecreamSlice';
import userSlice from '../features/user/userSlice';
const store = configureStore({
  reducer: {
    cake: cakeSlice,
    icecream : icecreamSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
