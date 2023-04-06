export const selectContacts = state => state.phonebook.contacts.items;
export const selectFilter = state => state.phonebook.filter;
export const selectVisibleContacts = state => {
  const currentFilter = state.phonebook.filter;
  const currentContacts = state.phonebook.contacts.items;

  if (currentFilter !== '') {
    const normalizedFilter = currentFilter.toLowerCase();
    return currentContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )};
  return currentContacts;
};
export const selectPending = state => state.phonebook.isLoading;
export const selectError = state => state.phonebook.error();
