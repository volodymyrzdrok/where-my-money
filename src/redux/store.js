import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { session } from './session/sessionSlice';
import { global } from './global/globalSlice';
import { finance } from './finance/financeSlice';
import { transactionsSummaryReducer } from './transactionsSummary/transactionsSummarySlice';

export const store = configureStore({
  reducer: { finance, session, global, summary: transactionsSummaryReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
