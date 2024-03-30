import { defineStore } from 'pinia';
export const useAppStore = defineStore({
  id: 'app-store',
  state: () => {
    return {
      contentType: undefined,
      description: undefined,
      h1: undefined,
      items: [],
      title: undefined,
    };
  },
  actions: {
    setH1(str) {
      this.h1 = str;
    },
    setTitle(str) {
      this.title = str;
    },
    setItems(arr) {
      this.items = arr;
    },
    setDescription(str) {
      this.description = str;
    },
    setContentType(str) {
      this.contentType = str;
    },
  },
  getters: {
    getItems: (state) => state.items,
    getH1: (state) => state.h1,
    getTitle: (state) => state.title,
    getDescription: (state) => state.description,
    getContentType: (state) => state.contentType,
  },
});
