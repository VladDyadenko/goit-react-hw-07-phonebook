import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operetions';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlise = createSlice({
  name: 'phonebook',
  initialState: contactsInitialState,
  reducers: {
    filterOnContact: {
      reducer: (state, { payload }) => {
        state.filter = payload;
      },
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items.push(payload);
    },
    [addContacts.rejected]: handleRejected,
    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === payload.id
      );
      state.contacts.items.splice(index, 1);
    },
  },
});
export const { filterOnContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
