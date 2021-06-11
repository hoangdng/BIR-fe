import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    book: {
      bookName: "Lo cc",
      author: "",
      releaseDate: null,
      authorImageFile: null,
      bookCoverImageFile: null,
      title: "",
      content: ""
    }
  },
  mutations: {
    setBook(state, book) {
      state.book.bookName = book.bookName;
      state.book.author = book.actions;
      state.book.releaseDate = book.releaseDate;
      state.book.authorImageFile = book.authorImageFile;
      state.book.bookCoverImageFile = book.bookCoverImageFile;
      state.book.title = book.title;
      state.book.content = book.content;
    }
  },
  actions: {
    async setBook({ commit }, data) {
      commit("setBook", data);
    }
  },
  getters: {
    getBook(state) {
      return state.book;
    }
  }
});
