import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slise';

const store = configureStore({
  reducer: { phonebook: contactsReducer },
});

export default store;
