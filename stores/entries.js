import { defineStore } from 'pinia';
export const useEntriesStore = defineStore({
  id: 'entries-store',
  state: () => {
    return {
      entries: [],
    };
  },
  actions: {
    setEntries(arr) {
      this.entries = arr;
    },
  },
  getters: {
    copyItems: (state) => state.entries,
  },
});
